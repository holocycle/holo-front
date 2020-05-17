<template>
  <div>
    <h2>切り抜きを作成する</h2>
    <v-row>
      <v-col cols="4">
        <v-form>
          <v-text-field
            v-model="videoId"
            label="動画ID"
          />
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="8">
                  <v-text-field
                    v-model="start"
                    :disabled="canSetStart"
                    label="開始時間(秒)"
                  ></v-text-field>
                </v-col>
                <v-spacer />
                <v-col cols="4">
                  <v-btn @click="setStart" :disabled="canSetStart">
                    <v-icon color="yellow">mdi-ray-start</v-icon>
                    開始
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-col cols="8">
                  <v-text-field
                    v-model="end"
                    :disabled="canSetEnd"
                    label="終了時間(秒)"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-btn @click="setEnd" :disabled="canSetEnd">
                    終了
                    <v-icon color="yellow">mdi-ray-end</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer />
            <v-col>
              <v-btn
                color="primary"
                :disabled="canCreateClip"
                @click="confirmClip"
              >
                タイトル/詳細入力
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>プレビュー</v-card-title>
          <v-card-text>
            <youtube
              ref="youtube"
              :video-id="videoId"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  asyncData (ctx) {
    const query = ctx.query
    const canSet = query.videoId == null ? 'disabled' : null
    return {
      videoId: query.videoId,
      start: query.start,
      end: query.end,
      canSetStart: canSet,
      canSetEnd: canSet,
      canCreateClip: canSet
    }
  },
  data () {
    return {
      videoId: '',
      start: 0,
      end: -1,
      canSetStart: null,
      canSetEnd: null,
      canCreateClip: null,
      title: 'タイトルをここに記載',
      description: '詳細をここに記載\n改行も入る',
      chips: [],
      canStart: null
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    }
  },
  watch: {
    videoId (val) {
      if (val !== '') {
        this.canSetStart = null
      }
    }
  },
  methods: {
    async setStart () {
      this.canSetEnd = null
      const currentTime = await this.player.getCurrentTime()
      this.start = Math.floor(currentTime) // 切り捨ての値
    },
    async setEnd () {
      this.canCreateClip = null
      const currentTime = await this.player.getCurrentTime()
      this.end = Math.ceil(currentTime) // 切り上げの値
      this.player.stopVideo()
    },
    confirmClip () {
      this.$router.push({
        path: '/clips/confirm',
        query:
          {
            videoId: this.videoId,
            start: this.start,
            end: this.end
          }
      })
    }
  }
}
</script>

<style scoped>

</style>
