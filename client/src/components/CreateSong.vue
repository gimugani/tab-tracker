<template>
  <v-layout>
    <v-flex xs4 offset-xs1>
    <app-panel title="Song Metadata">
      <v-text-field
            label="Title"
            :rules="[required]"
            v-model="song.title"/>
      <v-text-field
            label="Artist"
            :rules="[required]"
            v-model="song.artist"/>
      <v-text-field
            label="Genre"
            :rules="[required]"
            v-model="song.genre"/>
      <v-text-field
            label="Album"
            :rules="[required]"
            v-model="song.album"/>
      <v-text-field
            label="Album Image Url"
            :rules="[required]"
            v-model="song.albumImageUrl"/>
      <v-text-field
            label="Youtube ID"
            :rules="[required]"
            v-model="song.youtubeId"/>
    </app-panel>
    </v-flex>

    <v-flex xs6>
        <app-panel title="Song Structure" class="ml-4">
        <v-textarea
              auto-grow
              :rules="[required]"
              label="Lyrics"
              v-model="song.lyrics"/>
        <v-textarea
              auto-grow
              :rules="[required]"
              label="Tab"
              v-model="song.tab"/>
      </app-panel>
      <v-alert
        class="ml-4"
        :value="error"
        transition="scale-transition"
        error>
        {{error}}
      </v-alert>
      <v-btn flat small class="cyan" dark @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'

    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
          .keys(this.song)
          .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name:'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style>

</style>
