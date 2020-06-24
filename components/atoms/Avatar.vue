<template>
  <v-avatar :size="size">
    <v-img :src="src" />
  </v-avatar>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
