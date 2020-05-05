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
            <v-spacer/>
            <v-text-field
              v-model.number="endAt"
              label="終了時間(秒)"
            />
          </v-layout>
          <v-layout>
            <v-spacer/>
            <v-btn
              @click="createClip"
              color="primary"
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
              :start="beginAt"
              :end="endAt"
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
      ClipsApi.post(
        this.videoId,
        this.title,
        this.description,
        this.beginAt,
        this.endAt
      ).then(
        (response) => {
          this.result = response
          this.$router.push({ path: '/clips/' + this.videoId })
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
