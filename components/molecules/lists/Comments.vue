<!--動画に対するコメント-->
<template>
  <div>
    <v-list three-line>
      <template v-for="(comment, index) in comments">
        <v-subheader
          v-if="comment.header"
          :key="comment.header"
          v-text="comment.header"
        />

        <v-divider
          v-else-if="comment.divider"
          :key="index"
          :inset="comment.inset"
        />
        <v-text-field
          v-else-if="comment.sendComment"
          :key="comment.sendComment"
          v-model="message"
          :append-outer-icon="message ? 'mdi-send' : 'mdi-send'"
          filled
          label="comment"
          type="text"
        />

        <v-list-item
          v-else
          :key="comment.title"
        >
          <v-list-item-avatar>
            <v-img :src="comment.avatar" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-subtitle v-html="comment.name" />
            <v-list-item-title v-html="comment.comment" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: '',
    comments: [
      { header: '5件のコメント' },
      { sendComment: 'comment' },
      {
        divider: true,
        inset: true
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'user1',
        comment: '1get'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'user2',
        comment: 'てえてえ'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'user3',
        comment: 'てえてえ'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        name: 'user4',
        comment: 'てえてえ'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        name: 'user5',
        comment: 'てえてえ'
      }
    ]
  })
}
</script>
