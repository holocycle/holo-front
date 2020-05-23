<template>
  <div>
    <MoviePreviewOneLine title="人気の切り抜き一覧" :movie-previews="popularClipPreviews" />
    <MoviePreviewOneLine title="お気に入りの動画一覧" :movie-previews="favoriteClipPreviews" />
  </div>
</template>

<script>
import MoviePreviewOneLine from '../organisms/MoviePreviewOneLine'

export default {
  components: {
    MoviePreviewOneLine
  },
  props: {
    popularClipPreviews: {
      type: Array,
      required: true,
    },
    favoriteClipPreviews: {
      type: Array,
      required: true,
    }
  }
}
</script>
<style>
</style>
