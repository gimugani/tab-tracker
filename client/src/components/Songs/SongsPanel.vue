<template>
  <app-panel title="Songs">
      <v-btn
        slot="action"
        class="cyan accent-2"
        light
        small
        absolute
        right
        fab
        to="songs/new">
      <v-icon>add</v-icon>
      </v-btn>
    <div class="song" v-for="song in songs" :key="song.title">
      <v-layout>
        <v-flex xs6>
          <div class="song-title"> {{song.title}} </div>
          <div class="song-artist"> {{song.artist}} </div>
          <div class="song-genre"> {{song.album}} </div>
          <v-btn
            dark
            class="cyan"
            :to="{ name: 'song', params: {songId: song.id}}">View</v-btn>
        </v-flex>
        <v-flex xs6>
          <img :src="song.albumImageUrl" class="album-image">
        </v-flex>
      </v-layout>
    </div>
  </app-panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },

  watch: {
    '$route.query.search' : {
      immediate: true,
      async handler(value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
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
