<!--
https://developers.google.com/youtube/player_parameters?hl=ja
youtubeの埋め込みプレーヤーを表す

youtube status
  [UNSTARTED]: 'unstarted',
  [PLAYING]: 'playing',
  [PAUSED]: 'paused',
  [ENDED]: 'ended',
  [BUFFERING]: 'buffering',
  [CUED]: 'cued'
-->
<template>
  <youtube
    ref="youtube"
    :video-id="videoId"
    :player-vars="playerVars"
    @paused="paused"
    @ended="ended"
  />
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    },
    start: {
      type: Number,
      required: false,
      default: 0
    },
    end: {
      type: Number,
      required: false,
      default: -1
    },
    autoplay: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data () {
    return {
      youtubeStatus: 0
    }
  },
  computed: {
    playerVars () {
      return {
        start: this.start,
        end: this.end,
        autoplay: this.autoplay
      }
    }
  },
  methods: {
    paused (e) {
      console.log(e)
      this.$emit('paused')
    },
    ended (e) {
      console.log(e)
      this.$emit('ended')
    }
  }
}
</script>

<style scoped>

</style>
