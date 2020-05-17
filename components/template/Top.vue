<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <MoviePreviewOneLine
        title="人気の動画一覧"
        :movie-previews="popularMoviePreviews"
      />
      <br>
      <MoviePreviewOneLine
        title="お気に入りの動画一覧"
        :movie-previews="favoriteMoviePreviews"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import MoviePreviewOneLine from '../organisms/MoviePreviewOneLine'

export default {
  components: {
    MoviePreviewOneLine
  },
  props: {
    title: {
      type: String,
      required: false,
      default: null
    // },
    // moviePreviews: {
    //   type: Array,
    //   required: false
    }
  },
  data () {
    return {
      popularMoviePreviews: [
        {
          to: '/movies/X9zw0QF12Kc',
          imageUrl: 'https://img.youtube.com/vi/X9zw0QF12Kc/mqdefault.jpg',
          text: '【歌ってみた】サクラカゼ'
        }, {
          to: '/movies/9nD7aQ_cKAM',
          imageUrl: 'https://img.youtube.com/vi/9nD7aQ_cKAM/mqdefault.jpg',
          text: '【歌ってみた】バレンタインキッス'
        }, {
          to: '/movies/xccH7xxG5zc',
          imageUrl: 'https://img.youtube.com/vi/xccH7xxG5zc/mqdefault.jpg',
          text: 'コンセプト'
        }
      ],
      favoriteMoviePreviews: [
        {
          to: '/movies/X9zw0QF12Kc',
          imageUrl: 'https://img.youtube.com/vi/X9zw0QF12Kc/mqdefault.jpg',
          text: '【歌ってみた】サクラカゼ'
        }, {
          to: '/movies/9nD7aQ_cKAM',
          imageUrl: 'https://img.youtube.com/vi/9nD7aQ_cKAM/mqdefault.jpg',
          text: '【歌ってみた】バレンタインキッス'
        }, {
          to: '/movies/xccH7xxG5zc',
          imageUrl: 'https://img.youtube.com/vi/xccH7xxG5zc/mqdefault.jpg',
          text: 'コンセプト'
        }
      ]
    }
  }
}
</script>
<style>
</style>
