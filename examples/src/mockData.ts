/**
 * 此文件为如视官方提供的 mock 数据
 * 此文件的所有数据仅用作如视能力展示调试
 * 不可商用！！！
 * */

import getQueryValueByName from "./utils/getQueryValueByName";

// 根据不同的 query 参数，获取不同版本的数据
const defaultRenderCode = '81gmMq5a7zbF9leWMk'

const dataReq = getQueryValueByName('renderCode')
const dataCode = dataReq ? dataReq : defaultRenderCode

// 从 github 拉取开源 json 数据
const workUrl = `//unpkg.com/@realsee/open-works@0.1.0-alpha.3/virtual/${dataCode}/work.json`
const floorplanServerDataUrl = `//unpkg.com/@realsee/open-works@0.1.0-alpha.3/virtual/${dataCode}/floorplanServerData.json`
const modelRoomLabelsUrl = `//unpkg.com/@realsee/open-works@0.1.0-alpha.3/virtual/${dataCode}/modelRoomLabels.json`
const modelEntryDoorGuidePluginServerDataUrl = `//unpkg.com/@realsee/open-works@0.1.0-alpha.3/virtual/${dataCode}/modelEntryDoorGuidePluginServerData.json`

let work = null
let floorplanServerData = null
let modelRoomLabels = null
let modelEntryDoorGuidePluginServerData = null


await fetch(workUrl).then((res) => res.json()).then(res => work = res)
await fetch(floorplanServerDataUrl).then((res) => res.json()).then(res => floorplanServerData = res)
await fetch(modelRoomLabelsUrl).then((res) => res.json()).then(res => modelRoomLabels = res)
await fetch(modelEntryDoorGuidePluginServerDataUrl).then((res) => res.json()).then(res => modelEntryDoorGuidePluginServerData = res)


export {
    work,
    floorplanServerData,
    modelRoomLabels,
    modelEntryDoorGuidePluginServerData
}

