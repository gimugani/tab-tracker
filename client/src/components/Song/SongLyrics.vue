<template>
  <app-panel title="Lyrics">
          <v-textarea
            class="textarea"
            readonly
            v-model="song.lyrics"/>
        </app-panel>
</template>
<script>
import Panel from'@/components/panel'
export default {
  props: [
    'song'
  ],
  components: {
    appPanel: Panel
  }
}
</script>
<style>
  textarea {
    font-family:monospace;
    border: none;
    height: 350px;
    border-style:none;
    overflow: auto;
    padding: 40px
  }
</style>
