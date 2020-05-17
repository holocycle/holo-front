// FIXME: 暫定
<template>
  <div>
    <v-row>
      <v-img :src="bannerUrl" />
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-avatar size="60" class="avatar">
          <v-img :src="avatarUrl" />
        </v-avatar>
      </v-col>
      <v-col cols="auto" align-self="center">
        <v-row>
          <h2>{{ name }}</h2>
        </v-row>
        <v-row>チャンネル登録者数 {{ channelSubscriber }}</v-row>
      </v-col>
      <v-spacer />
      <v-col cols="auto" align-self="center">
        <v-btn color="#FF0000" :href="channelUrl">YouTubeチャンネル</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style scoped>
.avatar {
  margin: 5px 5px;
}
</style>
