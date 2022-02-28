<script lang="ts">
  import type { FloorplanRoomItem } from '../../typings/floorplanData'
  import { pathD } from '../../utils/formatPosition'

  export let path: FloorplanRoomItem['path']

  $: d = pathD(path, { needZ: true })
</script>

<!-- 木地板，偏灰的格格 -->
<defs>
  <pattern id="room-material-pattern-1" x="0" y="0" width="13" height="51" patternUnits="userSpaceOnUse">
    <rect x="0.5" y="0.5" width="6" height="50" fill="none" stroke="#4B4B57" stroke-width="0.5"></rect>
  </pattern>
  <pattern id="room-material-pattern-2" x="7" y="25" width="13" height="51" patternUnits="userSpaceOnUse">
    <rect x="0.5" y="0.5" width="6" height="50" fill="none" stroke="#4B4B57" stroke-width="0.5"></rect>
  </pattern>
</defs>
<path d="{d}" fill="#43434D"></path>
<path d="{d}" fill="url(#room-material-pattern-1)"></path>
<path d="{d}" fill="url(#room-material-pattern-2)"></path>
