<template>
  <v-card
    :to="to"
  >
    <v-img
      :src="imageUrl"
    />
    <v-card-text class="c-text-base">
      {{ text }}
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
