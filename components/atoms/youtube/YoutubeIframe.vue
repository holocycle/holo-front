<!--
https://developers.google.com/youtube/player_parameters?hl=ja
youtubeの埋め込みプレーヤーを表す
-->
<template>
  <iframe
    width="560"
    height="315"
    rel=0
    :src="url"
    frameborder="0"
    :allow="allow"
    allowfullscreen
  />
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      required: true
    },
    allow: {
      type: String,
      required: false,
      default: 'accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture'
    },
    autoplay: {
      type: Number,
      required: false,
      default: null
    },
    start: {
      type: Number,
      required: false,
      default: null
    },
    end: {
      type: Number,
      required: false,
      default: null
    },
    loop: {
      type: Number,
      required: false,
      default: null
    }
  },
  computed: {
    url () {
      const baseUrl = 'https://www.youtube.com/embed/' + this.videoId
      const getParameters = []
      if (this.autoplay != null) {
        getParameters.push('autoplay=' + this.autoplay)
      }
      if (this.start != null) {
        getParameters.push('start=' + this.start)
      }
      if (this.end != null) {
        getParameters.push('end=' + this.end)
      }
      if (this.loop != null) {
        getParameters.push('loop=' + this.loop)
      }

      if (getParameters.length === 0) {
        return baseUrl
      } else {
        return baseUrl + '?' + getParameters.join('&')
      }
    }
  }
}
</script>

<style scoped>

</style>
