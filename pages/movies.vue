<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <nuxt-child/>
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>
            <v-text-field
              v-else-if="item.sendComment"
              :key="item.sendComment"
              v-model="message"
              :append-outer-icon="message ? 'mdi-send' : 'mdi-send'"
              filled
              label="comment"
              type="text"
              @click:append="toggleMarker"
              @click:append-outer="sendMessage"
              @click:prepend="changeIcon"
              @click:clear="clearMessage"
            ></v-text-field>

            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-subtitle v-html="item.name"></v-list-item-subtitle>
                <v-list-item-title v-html="item.comment"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
      <v-col cols="4">
        <v-list>
          <v-subheader>list(ここは非表示の場合もある)</v-subheader>
          <v-list-item to="/movies/HKb9JfeA2-Y">
            <v-img width="0" src="https://img.youtube.com/vi/HKb9JfeA2-Y/mqdefault.jpg"></v-img>
            <v-list-item-content>
              <v-list-item-title>中笑いのくだり</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/movies/lwbGo-O6buc">
            <v-img width="0" src="https://img.youtube.com/vi/lwbGo-O6buc/mqdefault.jpg"></v-img>
            <v-list-item-content>
              切り抜き動画を見る紫咲シオン
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <br>
        <v-list>
          <v-subheader>関連動画</v-subheader>
          <v-list-item to="/movies/X9zw0QF12Kc">
            <v-img width="0" src="https://img.youtube.com/vi/X9zw0QF12Kc/mqdefault.jpg"></v-img>
            <v-list-item-content>
              <v-list-item-subtitle>お気に入り数: XXX</v-list-item-subtitle>
              <v-list-item-title>サクラカゼ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/movies/9nD7aQ_cKAM">
            <v-img width="0" src="https://img.youtube.com/vi/9nD7aQ_cKAM/mqdefault.jpg"></v-img>
            <v-list-item-content>
              <v-list-item-subtitle>お気に入り数: XXX</v-list-item-subtitle>
              <v-list-item-title>バレンタインキッス</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/movies/xccH7xxG5zc">
            <v-img width="0" src="https://img.youtube.com/vi/xccH7xxG5zc/mqdefault.jpg"></v-img>
            <v-list-item-content>
              <v-list-item-subtitle>お気に入り数: XXX</v-list-item-subtitle>
              <v-list-item-title>ここにタイトルが入る</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    password: 'Password',
    show: false,
    message: '',
    marker: true,
    iconIndex: 0,
    icons: [
      'mdi-emoticon',
      'mdi-emoticon-cool',
      'mdi-emoticon-dead',
      'mdi-emoticon-excited',
      'mdi-emoticon-happy',
      'mdi-emoticon-neutral',
      'mdi-emoticon-sad',
      'mdi-emoticon-tongue'
    ],
    items: [
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
  }),

  computed: {
    icon () {
      return this.icons[this.iconIndex]
    }
  },

  methods: {
    toggleMarker () {
      this.marker = !this.marker
    },
    sendMessage () {
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage () {
      this.message = ''
    },
    resetIcon () {
      this.iconIndex = 0
    },
    changeIcon () {
      this.iconIndex === this.icons.length - 1
        ? this.iconIndex = 0
        : this.iconIndex++
    }
  }
}
</script>
<style>
</style>
