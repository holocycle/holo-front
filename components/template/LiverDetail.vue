<template>
  <div>
    <LiverDetailHeader
      :name="name"
      :channel-url="channelUrl"
      :avatar-url="avatarUrl"
      :banner-url="bannerUrl"
      :channel-subscriber="channelSubscriber"
    />
    <MoviePreviewOneLine title="最近の動画" :movie-previews="latestMovies" />
    <MoviePreviewOneLine title="人気の動画" :movie-previews="popularMovies" />
  </div>
</template>

<script>
import LiverDetailHeader from '../organisms/LiverDetailHeader'
import MoviePreviewOneLine from '../organisms/MoviePreviewOneLine'
export default {
  components: {
    LiverDetailHeader,
    MoviePreviewOneLine
  },
  props: {
    name: {
      type: String,
      required: true
    },
    channelUrl: {
      type: String,
      required: true
    },
    avatarUrl: {
      type: String,
      required: true
    },
    bannerUrl: {
      type: String,
      required: true
    },
    channelSubscriber: {
      type: Number,
      required: true
    },
    latestMovies: {
      type: Array,
      required: true
    },
    popularMovies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.avatar {
  margin: 5px 5px;
}
</style>
