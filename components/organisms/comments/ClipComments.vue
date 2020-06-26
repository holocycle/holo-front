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
    <template v-for="(comment, index) in comments">
      <CommentListItem
        :key="index + comment.content + comment.user.name"
        :comment="comment"
      />
    </template>
  </v-list>
</template>
<script>
import CommentListItem from '../../molecules/comments/CommentListItem'

export default {
  components: { CommentListItem },
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
    comments: [
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
