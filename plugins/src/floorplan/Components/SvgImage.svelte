<script lang="ts">
  export let content: string  

  const svgStyle = `
    <style>
      svg [type='lineGroup'] path {
        fill: #ffffff;
        stroke: #ffffff;
      }
      svg [type='lineItemGroup'] g g g g {
        stroke: #ffffff;
      }
    </style>
  `
</script>

<div class="floorplan-plugin__base-image">
  {@html svgStyle}
  {@html content}
</div>

<style>
  .floorplan-plugin__base-image {
    width: 100%;
    height: 100%;
  }
</style>
