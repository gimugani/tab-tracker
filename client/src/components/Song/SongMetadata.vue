<template>
  <app-panel title="Song Metadata">
     <v-btn
          slot="action"
          class="cyan accent-2"
          light
          small
          absolute
          right
          fab
          :to="{ name: 'song-edit', params: {songId: song.id}}">
        <v-icon>edit</v-icon>
        </v-btn>
    <v-layout>
      <v-flex xs6>
        <div class="song-title"> {{song.title}} </div>
        <div class="song-artist"> {{song.artist}} </div>
        <div class="song-genre"> {{song.album}} </div>
      </v-flex>
      <v-flex xs6>
        <img :src="song.albumImageUrl" class="album-image">
        <br>
        {{song.album}}
      </v-flex>
    </v-layout>
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

<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden
  }
  .song-title{
    font-size: 30px;
  }
  .song-artist{
    font-size: 24px;
  }
  .song-genre{
    font-size: 18px;
  }
  .album-image{
    width: 70%;
    margin: 0 auto;
  }

</style>
