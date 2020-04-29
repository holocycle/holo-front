<template>
  <div>
    <h2 v-if="title">
      {{ title }}
    </h2>
    <v-row>
      <div v-for="moviePreview in moviePreviews" :key="moviePreview.imageUrl">
        <MoviePreviewCard
          :to="moviePreview.to"
          image-height="200px"
          :image-url="moviePreview.imageUrl"
          :text="moviePreview.text"
        />
      </div>
    </v-row>
  </div>
</template>

<script>
import MoviePreviewCard from '../molecules/cards/MoviePreviewCard'

export default {
  components: {
    MoviePreviewCard
  },
  props: {
    title: {
      type: String,
      required: false,
      default: null
    },
    moviePreviews: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>
