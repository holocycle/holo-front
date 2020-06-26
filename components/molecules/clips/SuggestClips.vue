<template>
  <v-list>
    <v-subheader class="c-text-base">{{ title }}</v-subheader>
    <v-list-item class="c-text-base">
      実装予定
    </v-list-item>
    <!--    <v-list-item-->
    <!--      v-for="moviePreview in moviePreviews"-->
    <!--      :key="moviePreview.url"-->
    <!--      :to="moviePreview.to"-->
    <!--    >-->
    <!--      <v-img width="0" :src="moviePreview.url" />-->
    <!--      <v-list-item-content>-->
    <!--        <v-list-item-subtitle>{{ moviePreview.subTitle }}</v-list-item-subtitle>-->
    <!--        <v-list-item-title>{{ moviePreview.title }}</v-list-item-title>-->
    <!--      </v-list-item-content>-->
    <!--    </v-list-item>-->
  </v-list>
</template>

<script>
export default {
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
