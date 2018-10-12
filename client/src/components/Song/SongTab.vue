<template>
  <app-panel title="Tabs">
          <v-textarea
            class="textarea"
            readonly
            v-model="song.tab"/>
  </app-panel>
</template>
<script>

export default {
  props: [
    'song'
  ]
}
</script>
<style>
  textarea {
    font-family:monospace;
    border: none;
    height: 350px;
    font-size: 12px;
    border-style:none;
    overflow: auto;
  }
</style>

