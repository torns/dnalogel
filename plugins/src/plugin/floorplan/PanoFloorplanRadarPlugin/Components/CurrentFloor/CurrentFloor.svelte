<script lang="ts">
  import type { Five } from '@realsee/five'
  import type { FloorplanData } from '../../../typings/floorplanData'
  import Highlight from '../../../Components/RoomHighlight/RoomHighlight.svelte'
  import BaseImage from '../../../Components/BaseImage.svelte'

  export let five: Five
  export let pxmm: number
  export let floorIndex: number
  export let hoverEnable: boolean
  export let floorplanData: FloorplanData

  const onRoomHeightClick = undefined
</script>

<BaseImage {...{ floorIndex, floorplanData }} />
{#if hoverEnable}
  <Highlight {...{ five, pxmm, floorIndex, floorplanData, onRoomHeightClick }} />
{/if}
