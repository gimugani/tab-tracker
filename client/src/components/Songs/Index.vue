<template>
  <v-layout align-center justify-center>
  <v-flex xs6>
    <app-songs-search-panel></app-songs-search-panel>
    <app-songs-panel class="mt-2"></app-songs-panel>
  </v-flex>
</v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    appSongsPanel: SongsPanel,
    appSongsSearchPanel: SongsSearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
      this.songs = (await SongsService.index()).data
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
