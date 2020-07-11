<template>
  <v-card
    :to="to"
  >
    <v-img
      :src="imageUrl"
    />
    <v-card-text class="c-text-base">
      {{ liverName }}
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
    liverName: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style>
</style>
