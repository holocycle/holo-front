<template>
  <v-row>
    <v-col cols="8">
      <Movie
        :video-id="videoId"
        :start="start"
        :end="end"
        :title="title"
        :tags="tags"
        :description="description"
      />
      <Comments
        :comments="comments"
        @sendComment="sendComment"
      />
    </v-col>
    <v-col cols="4">
      <SuggestMovies
        title="関連動画"
        :movie-previews="relatedMoviePreviews"
      />
      <br>
      <SuggestMovies
        title="おすすめ動画"
        :movie-previews="recommendedMoviePreviews"
      />
    </v-col>
  </v-row>
</template>

<script>
import Movie from '../molecules/movies/Movie'
import SuggestMovies from '../molecules/lists/SuggestMovies'
import Comments from '../molecules/lists/Comments'

export default {
  components: {
    Movie,
    SuggestMovies,
    Comments
  },
  props: {
    videoId: {
      type: String,
      required: true
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
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    comments: {
      type: Array,
      required: false,
      default: null
    },
    relatedMoviePreviews: {
      type: Array,
      required: true
    },
    recommendedMoviePreviews: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    sendComment (message) {
      this.$emit('sendComment', message)
    }
  }
}
</script>
<style>
</style>
