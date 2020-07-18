<!--
xs: 1 column
sm: 2 column
md: 3 column
lg: 4 column
-->
<template>
  <div>
    <nuxt-link class="c-text-base c-clickable" :to="`${listUrl}`" tag="div">
      <v-row>
        <v-col v-show="title">
          <h2 class="c-text-base">
            {{ title }}
          </h2>
        </v-col>
        <v-spacer />
        <v-col class="left-text" v-if="listUrl">
          すべて見る
        </v-col>
      </v-row>
    </nuxt-link>
    <v-row>
      <v-col
        v-for="moviePreview in moviePreviews"
        :key="moviePreview.imageUrl"
        xs="12"
        sm="6"
        md="4"
        lg="3"
      >
        <ClipPreviewCard
          :to="moviePreview.to"
          :image-url="moviePreview.imageUrl"
          :title="moviePreview.title"
          :favorite-count="moviePreview.favoriteCount"
          :published-at="moviePreview.publishedAt"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ClipPreviewCard from '../molecules/clips/ClipPreviewCard'

export default {
  components: {
    ClipPreviewCard
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
