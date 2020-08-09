<template>
  <div>
    <h2 class="c-text-base">切り抜きを作成する</h2>
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
                    label="開始時間(秒)"
                  ></v-text-field>
                </v-col>
                <v-spacer />
                <v-col cols="4">
                  <v-btn class="c-text-base" @click="setStart">
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
                  <v-btn class="c-text-base" @click="setEnd">
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
                color="accent"
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
          <v-card-title class="c-text-base">プレビュー</v-card-title>
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
  props: {
    videoId: {
      type: String,
      required: true
    },
    start: {
      type: Number,
      required: false,
      default: null
    },
    end: {
      type: Number,
      required: false,
      default: null
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
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
      this.$emit('confirmClip', this.videoId, this.start, this.end)
    }
  }
}
</script>
<style>
</style>
