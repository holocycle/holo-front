<!--
xs: 1 column
sm: 2 column
md: 3 column
lg: 4 column
-->
<template>
  <div>
    <v-row>
      <v-col v-if="title">
        <h2>{{ title }}</h2>
      </v-col>
      <v-spacer />
      <v-col v-if="listUrl">
        <nuxt-link class="left-text" :to="`${listUrl}`" tag="p">
          すべて見る
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="moviePreview in moviePreviews"
        :key="moviePreview.imageUrl"
        xs="12"
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
    listUrl: {
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
.left-text {
  text-align: right
}
</style>
