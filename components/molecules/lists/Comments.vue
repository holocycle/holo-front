<!--動画に対するコメント-->
<template>
  <v-list three-line>
    <v-subheader
      v-text="header"
    />
    <v-list-item>
      <v-text-field
        v-model="message"
        :append-outer-icon="message ? 'mdi-send' : 'mdi-send'"
        filled
        label="comment"
        type="text"
        @click:append-outer="sendComment"
      />
    </v-list-item>
    <v-divider />
    <v-list-item
      :key="index + comment.content + comment.user.name"
      v-for="(comment, index) in comments">
      <v-list-item-avatar>
        <v-img :src="comment.user.iconUrl" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-subtitle v-html="comment.user.name" />
        <v-list-item-title v-html="comment.content" />
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  props: {
    comments: {
      type: Array,
      required: false,
      default: null
    }
  },
  data: () => ({
    message: '',
    header: 'コメント',
    comment: [
      {
        content: '1get',
        user: {
          iconUrl: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          name: 'user1'
        }
      }
    ]
  }),
  methods: {
    sendComment () {
      this.$emit('sendComment', this.message)
      this.message = ''
    }
  }
}
</script>
