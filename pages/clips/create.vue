<template>
  <div>
    <h2>切り抜きを作成する</h2>
    {{ result }}
    <v-row>
      <v-col cols="4">
        <v-form>
          <v-text-field
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
              v-model.number="beginAt"
              label="開始時間(秒)"
            />
            <v-spacer />
            <v-text-field
              v-model.number="endAt"
              label="終了時間(秒)"
            />
          </v-layout>
          <v-layout>
            <v-spacer />
            <v-btn
              color="primary"
              @click="createClip"
            >
              create
            </v-btn>
          </v-layout>
        </v-form>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>プレビュー</v-card-title>
          <v-card-text>
            <Movie
              :video-id="videoId"
              :start="beginAt.number"
              :end="endAt.number"
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
  data () {
    return {
      videoId: '',
      title: 'タイトルをここに記載',
      description: '詳細をここに記載\n改行も入る',
      chips: [],
      beginAt: 0,
      endAt: 0,
      result: ''
    }
  },
  methods: {
    createClip () {
      const request = new PostClipRequest()
      request.videoId = this.videoId
      request.title = this.title
      request.description = this.description
      request.beginAt = this.beginAt
      request.endAt = this.endAt

      ClipsApi.post(
        request
      ).then(
        (response) => {
          this.$router.push({ path: '/clips/' + response.clipId })
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
