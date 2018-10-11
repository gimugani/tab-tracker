<template>
  <app-panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="245"
      ></youtube>
  </app-panel>
</template>

<script>
import Panel from'@/components/panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    appPanel: Panel
  }
}
</script>

<style scoped>

</style>
