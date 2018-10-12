<template>
  <app-panel title="Lyrics">
          <v-textarea
            class="textarea"
            readonly
            v-model="song.lyrics"/>
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
    border-style:none;
    overflow: auto;
    padding: 40px
  }
</style>
