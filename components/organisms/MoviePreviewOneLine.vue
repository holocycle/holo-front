<!--
xs: 1 column
sm: 2 column
md: 3 column
lg: 4 column
-->
<template>
  <div>
    <div>
      <h2 v-if="title">
        {{ title }}
      </h2>
    </div>
    <v-row>
      <v-col
        v-for="moviePreview in moviePreviews"
        :key="moviePreview.imageUrl"
        xs="8"
        sm="6"
        md="4"
        lg="3"
      >
        <MoviePreviewCard
          :to="moviePreview.to"
          :image-url="moviePreview.imageUrl"
          :text="moviePreview.text"
        />
      </v-col>
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
