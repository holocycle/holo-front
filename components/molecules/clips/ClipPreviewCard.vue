<template>
  <v-card
    :to="to"
  >
    <v-img
      :src="imageUrl"
    />
    <v-card-text class="c-text-base" style="padding-bottom: 0">
      <span>{{ title }}</span>
    </v-card-text>
    <v-card-actions style="padding-top: 0">
      <div class="caption">
        <span class="c-text-base">元動画作成:{{ publishedAt | formatTime }}</span>
      </div>
      <v-spacer />
      <FavoriteStarIcon
        favorite
        @starClicked="() => {}"
      />
      <span class="c-text-base">{{ favoriteCount }}</span>
    </v-card-actions>
  </v-card>
</template>

<script>
import moment from 'moment'
import FavoriteStarIcon from '../../atoms/icon/FavoriteStarIcon'

export default {
  components: {
    FavoriteStarIcon
  },
  filters: {
    formatTime (date) {
      return moment(date).format('YYYY/MM/DD')
    }
  },
  props: {
    // cardの遷移先
    to: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    favoriteCount: {
      type: Number,
      required: false,
      default: 0
    },
    publishedAt: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style>
</style>
