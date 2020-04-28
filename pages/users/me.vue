<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xccH7xxG5zc?rel=0&start=2799&end=2871"
          frameborder="0"
          allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"
          allowfullscreen></iframe>
        <h2>このアプリのコンセプトを説明した動画</h2>
        <v-chip
          class="ma-2"
          color="red"
          label
        >
          <v-icon left>mdi-account-circle-outline</v-icon>
          宝鐘マリン
        </v-chip>
        <v-chip class="ma-2" label>tag1</v-chip>
        <v-chip class="ma-2" label>tag2</v-chip>
        <p class="text-justify">
          ここに動画の説明が入る。<br>
          ほげぴよ
        </p>
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
    https://www.youtube.com/watch?v=lwbGo-O6buc&t=1320s 中笑いの話好き
    https://www.youtube.com/watch?v=HKb9JfeA2-Y&t=771 ここのどこか 12:51くらい t=771

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
