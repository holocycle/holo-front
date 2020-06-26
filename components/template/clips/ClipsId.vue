<template>
  <v-row>
    <v-col cols="8">
      <Clip
        :video-id="videoId"
        :start="start"
        :end="end"
        :title="title"
        :tags="tags"
        :description="description"
        :favorite="favorite"
        @putFavorite="putFavorite"
        @deleteFavorite="deleteFavorite"
      />
      <ClipComments
        :comments="comments"
        @sendComment="sendComment"
      />
    </v-col>
    <v-col cols="4">
      <SuggestClips
        title="関連動画"
        :movie-previews="relatedMoviePreviews"
      />
      <br>
      <SuggestClips
        title="おすすめ動画"
        :movie-previews="recommendedMoviePreviews"
      />
    </v-col>
  </v-row>
</template>

<script>
import Clip from '../../molecules/clips/Clip'
import SuggestClips from '../../molecules/clips/SuggestClips'
import ClipComments from '../../organisms/comments/ClipComments'

export default {
  components: {
    Clip,
    SuggestClips,
    ClipComments
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
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    sendComment (message) {
      this.$emit('sendComment', message)
    },
    putFavorite () {
      this.$emit('putFavorite')
    },
    deleteFavorite () {
      this.$emit('deleteFavorite')
    }
  }
}
</script>
<style>
</style>
