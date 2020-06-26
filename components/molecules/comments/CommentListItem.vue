<!--動画のコメント-->
<template>
  <v-list-item :key="key">
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
    key: {
      type: String,
      required: true,
      default: ''
    },
    comment: {
      type: Object,
      required: false,
      default: null
    }
  },
  data: () => ({
    comment:
      {
        content: '1get',
        user: {
          iconUrl: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          name: 'user1'
        }
      }
  })
}
</script>
