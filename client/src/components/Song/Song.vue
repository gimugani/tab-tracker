<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <app-song-metadata :song="song"></app-song-metadata>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <app-song-youtube :youtubeId="song.youtubeId"></app-song-youtube>
      </v-flex>
    </v-layout>

    <v-layout class="mt-3">
      <v-flex xs6>
        <app-song-lyrics :song="song"></app-song-lyrics>
      </v-flex>
      <v-flex xs6 class="ml-2">
        <app-song-tab :song="song"></app-song-tab>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongYoutube from './SongYoutube'
import SongLyrics from './SongLyrics'
import SongTab from './SongTab'
import SongMetadata from '@/components/Song/SongMetadata'
import Panel from'@/components/panel'

export default {
  data(){
    return{
      song: null
    }
  },
  async mounted(){
        const songId = this.$store.state.route.params.songId
        this.song = (await SongsService.show(songId)).data
  },
  components: {
    appPanel: Panel,
    appSongMetadata: SongMetadata,
    appSongYoutube: SongYoutube,
    appSongTab: SongTab,
    appSongLyrics: SongLyrics
  }
}
</script>

<style scoped>
</style>
