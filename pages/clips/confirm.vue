<template>
  <div>
    <h2>切り抜きを作成する</h2>
    <v-row>
      <v-col cols="4">
        <v-form>
          <v-text-field
            disabled="disabled"
            v-model="videoId"
            label="動画ID"
          />
          <v-text-field
            v-model="title"
            label="タイトル"
          />
          <v-textarea
            v-model="description"
            label="詳細"
          />
          <v-layout>
            <v-text-field
              v-model.number="start"
              disabled="disabled"
              label="開始時間(秒)"
            />
            <v-spacer />
            <v-text-field
              v-model.number="end"
              disabled="disabled"
              label="終了時間(秒)"
            />
          </v-layout>
          <v-layout>
            <v-btn
              color="secondary"
              @click="back"
            >
              戻る
            </v-btn>
            <v-spacer />
            <v-btn
              color="primary"
              @click="createClip"
            >
              作成
            </v-btn>
          </v-layout>
        </v-form>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>プレビュー</v-card-title>
          <v-card-subtitle>ここで再生時間の確認ができます</v-card-subtitle>
          <v-card-text>
            <Movie
              :video-id="videoId"
              :start="start"
              :end="end"
              :title="title"
              :chips="chips"
              :descriptions="description"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { PostClipRequest } from 'holo-back'
import ClipsApi from '../../lib/api/clips'
import Movie from '../../components/molecules/movies/Movie'

export default {
  components: { Movie },
  asyncData (ctx) {
    const query = ctx.query
    return {
      videoId: query.videoId,
      start: query.start,
      end: query.end
    }
  },
  data () {
    return {
      videoId: '',
      start: 0,
      end: 0,
      title: 'タイトルをここに記載',
      description: '詳細をここに記載\n改行も入る',
      chips: []
    }
  },
  methods: {
    createClip () {
      const request = new PostClipRequest()
      request.videoId = this.videoId
      request.title = this.title
      request.description = this.description
      request.beginAt = Number(this.start)
      request.endAt = Number(this.end)

      ClipsApi.post(
        request
      ).then(
        (response) => {
          this.$router.push({ path: '/clips/' + response.clipId })
        }
      )
    },
    back () {
      this.$router.push({
        path: '/clips/create',
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
