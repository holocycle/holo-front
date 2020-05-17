<!--
https://developers.google.com/youtube/player_parameters?hl=ja
youtubeの埋め込みプレーヤーを表す
-->
<template>
  <youtube
    ref="youtube"
    :video-id="videoId"
    :player-vars="playerVars"
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
    }
  },
  computed: {
    playerVars () {
      return {
        start: this.start,
        end: this.end
      }
    }
  }
}
</script>

<style scoped>

</style>
