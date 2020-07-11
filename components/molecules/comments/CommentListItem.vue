<!--動画のコメント-->
<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="comment.user.iconUrl" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-subtitle class="c-text-base" v-html="comment.user.name" />
      <v-list-item-title class="c-text-base" v-html="comment.content" />
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  props: {
    comment: {
      type: Object,
      required: false,
      default: null
    }
  }
}
</script>
