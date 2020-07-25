<template>
  <ClipConfirm
    :videoId="videoId"
    :start="start"
    :end="end"
    @createClip="createClip"
    @back="back"
  />
</template>

<script>
import { PostClipRequest, PutTagOnClipRequest } from 'holo-back'
import ClipConfirm from '../../components/template/clips/ClipsConfirm'
import ClipsApi from '../../lib/api/clips'
import TagApi from '../../lib/api/tags'

export default {
  components: { ClipConfirm },
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
    }
  },
  methods: {
    async createClip (clip) {
      const request = new PostClipRequest()
      request.videoId = clip.videoId
      request.title = clip.title
      request.description = clip.description
      request.beginAt = Number(clip.start)
      request.endAt = Number(clip.end)

      // clipを登録する
      let clipId = ''
      await ClipsApi.post(
        request
      ).then(
        (response) => {
          clipId = response.clipId
        }
      )
      if (clipId === '') {
        // TODO 登録エラー
      }

      // clipに紐づくtagを登録する
      await clip.tags.forEach((tag) => {
        const req = new PutTagOnClipRequest()
        TagApi.putByClipId(clipId, tag.id, req)
      })

      this.$router.push({ path: '/clips/' + clipId })
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
