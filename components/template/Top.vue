<template>
  <div>
    <MoviePreviewOneLine
      title="人気の切り抜き"
      list-url="/clips/toprated"
      :movie-previews="popularClipPreviews"
    />
    <MoviePreviewOneLine
      title="お気に入り"
      list-url="/users/me"
      :movie-previews="favoriteClipPreviews" />
    <h1 class="c-text-base">tag一覧(作成中)</h1>
    <p class="c-text-base">ここにtag一覧(ランダム?)を載せる</p>
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
      required: true
    },
    favoriteClipPreviews: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
</style>
