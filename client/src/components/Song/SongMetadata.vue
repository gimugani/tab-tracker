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
          :to="{
            name: 'song-edit',
            params() {
              return  {
                  songId: song.id
                }
              }
            }">
        <v-icon>edit</v-icon>
        </v-btn>
    <v-layout>
      <v-flex xs6>
        <div class="song-title"> {{song.title}} </div>
        <div class="song-artist"> {{song.artist}} </div>
        <div class="song-genre"> {{song.album}} </div>
        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan mt-5"
          @click="setAsBookmark"
          >Bookmark</v-btn>
        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan mt-5"
          @click="unsetAsBookmark"
          >Unbookmark</v-btn>
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
import { mapState } from 'vuex'
import BookmarkService from '@/services/BookmarkService'

export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark:  null
    }
  },
  methods: {
    async setAsBookmark(){
      try {
        this.bookmark = (await BookmarkService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err){
        console.log(err)
      }
    },
    async unsetAsBookmark(){
      try {
        await BookmarkService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err){
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  watch: {
    async song(){
      if (!this.isUserLoggedIn){
        return;
      }
      try{
        this.bookmark = (await BookmarkService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (err) {
        console.log(err)
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
