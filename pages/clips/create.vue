<template>
  <div>
    <h2>切り抜きを作成する</h2>
    {{ result }}
    <v-form>
      <v-text-field
        v-model="videoId"
        label="動画ID"
      />
      <v-text-field
        v-model="title"
        label="タイトル"
      />
      <v-text-field
        v-model="description"
        label="詳細"
      />
      <v-text-field
        v-model.number="beginAt"
        label="開始時間"
      />
      <v-text-field
        v-model.number="endAt"
        label="終了時間"
      />
      <v-btn
        @click="createClip"
      >
        create
      </v-btn>
    </v-form>

  </div>
</template>

<script>
import ClipsApi from '../../lib/api/clips'

export default {
  data () {
    return {
      videoId: '',
      title: '',
      description: '',
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
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
