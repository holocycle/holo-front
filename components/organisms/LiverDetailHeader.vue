<template>
  <div>
    <div>
      <v-img :src="bannerUrl" />
    </div>
    <v-row>
      <v-col cols="auto">
        <Avatar size="70" :src="avatarUrl" />
      </v-col>
      <v-col cols="auto" align-self="center">
        <div>
          <h2>{{ name }}</h2>
        </div>
        <div>
          <span>チャンネル登録者数</span>
          <span>{{ channelSubscriber }}</span>
        </div>
      </v-col>
      <v-spacer />
      <v-col cols="auto" align-self="center">
        <v-btn color="#FF0000" dark :href="channelUrl">
          YouTubeチャンネル
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Avatar from '../atoms/Avatar'

export default {
  components: {
    Avatar
  },
  props: {
    name: {
      type: String,
      required: true
    },
    channelUrl: {
      type: String,
      required: true
    },
    avatarUrl: {
      type: String,
      required: true
    },
    bannerUrl: {
      type: String,
      required: true
    },
    channelSubscriber: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
