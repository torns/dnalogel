import type { Five } from '@realsee/five'
import { FLOORPLAN_EXTRA_OBJECT_IMAGE } from '../Assets/floorplanExtraObject'
import type {
  FloorplanData,
  FloorplanEntrance,
  FloorplanExtraObject,
  FloorplanExtraObject3D,
  FloorplanFloorData,
  FloorplanObserver,
  FloorplanOutlineItem,
  FloorplanRoomItem,
} from '../typings/floorplanData'
import type {
  FloorplanServerData,
  FloorplanServerEntrance,
  FloorplanServerFloorData,
  FloorplanServerObserver,
  FloorplanServerRoomItem,
  FloorplanServerOutlineItem,
} from '../typings/floorplanServerData'
import {
  floorplanPosition2ImagePosition,
  getFloorIndexFromModelPosition,
  modelPosition2FloorplanPosition,
} from './formatPosition'

async function formatOutlines(outlines: FloorplanServerOutlineItem[]): Promise<FloorplanOutlineItem[]> {
  const headers = new Headers({ 'Content-Type': 'text/plain' })
  const getOutlineItem = async function (item: FloorplanServerOutlineItem) {
    const outlineItem: FloorplanOutlineItem = {
      index: item.index,
      url: item.url,
      svgUrl: item.svg_url,
    }
    if (item.svg_url) {
      const svgContent = await fetch(item.svg_url, { headers }).then((res) => res.text())
      outlineItem.svgContent = svgContent
    }
    return outlineItem
  }
  const svgOutlineItems = await Promise.all(outlines.map(getOutlineItem))
  return svgOutlineItems
}

function formatRoom(data: FloorplanServerRoomItem): FloorplanRoomItem {
  const floorplanRoomItem: FloorplanRoomItem = {
    id: data.id,
    size: data.size,
    name: data.name,
    path: data.path,
    roomType: data.room_type,
    floorType: data.floor_type,
    roomLabel: {
      position: data.room_label.position,
      positionInImage: data.room_label.position_in_image,
    },
    observerIndexs: data.observer_indexs,
  }
  return floorplanRoomItem
}

function formatFloorData(_data: FloorplanServerFloorData): FloorplanFloorData {
  return {
    floorName: _data.floor_name,
    floorIndex: _data.floor_index,
    rooms: _data.rooms.map(formatRoom),
    rules: _data.rules,
  }
}

function formateFloorplanObserver(data: FloorplanServerObserver): FloorplanObserver {
  const floorplanObserver: FloorplanObserver = {
    index: data.index,
    floorIndex: data.floor_index,
    position: data.position,
    positionInImage: data.position_in_image,
  }
  return floorplanObserver
}

function formatFloorplanEntrance(data: FloorplanServerEntrance): FloorplanEntrance {
  const floorplanEntrance: FloorplanEntrance = {
    rad: data.rad,
    position: data.position,
    positionInImage: data.position_in_image,
    northRad: data.north_rad,
    roomId: data.room_id,
    floorIndex: data.floor_index,
  }
  return floorplanEntrance
}

export default async function formatData(data: FloorplanServerData): Promise<FloorplanData> {
  const outlines = await formatOutlines(data.outlines)
  const bounding = data.computed_data.bounding
  const floorDatas = data.computed_data.floor_datas.map(formatFloorData)
  const entrance = data.computed_data.entrance ? formatFloorplanEntrance(data.computed_data.entrance) : null
  const floorplanData: FloorplanData = {
    outlines,
    entrance,
    bounding,
    floorDatas,
    observers: data.computed_data.observers.map(formateFloorplanObserver),
  }
  return floorplanData
}

export function formatExtraObjects(
  data: FloorplanExtraObject3D[],
  five: Five,
  floorplanData: FloorplanData,
): FloorplanExtraObject[] {
  const extraObjects: FloorplanExtraObject[] = data.map((object) => {
    const position = object.position
    const icon: NonNullable<FloorplanExtraObject['icon']> = object.icon
      ? object.icon
      : {
          url: FLOORPLAN_EXTRA_OBJECT_IMAGE,
          width: 45,
          height: 48,
        }
    const floorIndex = getFloorIndexFromModelPosition(position, five)
    const floorplanPosition = modelPosition2FloorplanPosition(position, floorplanData)
    const floorplanImagePosition = floorplanPosition2ImagePosition(floorplanPosition, floorplanData)
    return { floorIndex, icon, id: object.id, position: floorplanPosition, positionInImage: floorplanImagePosition }
  })
  return extraObjects
}
