<template>
  <v-card
    max-width="400"
    :to="to"
  >
    <v-img
      :height="imageHeight"
      :src="imageUrl"
    ></v-img>
    <v-card-text class="text--primary">
      {{text}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    // cardの遷移先
    to: {
      type: String,
      required: true
    },
    // cardに表示させる画像情報
    imageHeight: {
      type: String,
      required: false,
      default: '200px'
    },
    imageUrl: {
      type: String,
      required: true
    },
    // card下部に表示させる画像情報
    text: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style>
</style>
