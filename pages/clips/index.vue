<template>
  <div>
    <ClipId
      :video-id="clip.video.id"
      :title="clip.title"
      :tags="chips"
      :start="clip.beginAt"
      :end="clip.endAt"
      :description="clip.description"
      :comments="comments"
      :related-movie-previews="relatedMoviePreviews"
      :recommended-movie-previews="recommendedMoviePreviews"
      @sendComment="sendComment"
    />
  </div>
</template>
<script>
import { ListCommentsRequest, PostCommentRequest } from 'holo-back'
import ClipId from '../../components/template/clips/ClipsId'
import ClipsApi from '../../lib/api/clips'
import CommentApi from '../../lib/api/comment'

export default {
  components: {
    ClipId
  },
  async asyncData (ctx) {
    const clipId = ctx.params.id
    const { clip } = await ClipsApi.post()

    const request = new ListCommentsRequest()
    request.limit = 20
    request.orderBy = 'latest'
    const { comments } = await CommentApi.getList(clipId, request)

    return {
      clip,
      comments
    }
  },
  data () {
    return {
      clip: null,
      comments: null,
      chips: [
        {
          name: '夏色まつり',
          color: '#FF7709'
        }],
      relatedMoviePreviews: [
        {
          to: '/movies/HKb9JfeA2-Y',
          url: 'https://img.youtube.com/vi/HKb9JfeA2-Y/mqdefault.jpg',
          subTitle: '中笑いのくだり'
        }
      ],
      recommendedMoviePreviews: [
        {
          to: '/movies/X9zw0QF12Kc',
          url: 'https://img.youtube.com/vi/X9zw0QF12Kc/mqdefault.jpg',
          subTitle: 'サクラカゼ'
        }
      ]
    }
  },
  methods: {
    async sendComment (comment) {
      const request = new PostCommentRequest()
      request.content = comment
      const postCommentResponse = await CommentApi.post(this.clip.id, request)
      console.log('created. id: ' + postCommentResponse.commentId)

      await this.refreshCommentField()
    },
    async refreshCommentField () {
      const request = new ListCommentsRequest()
      request.limit = 20
      request.orderBy = 'latest'
      const { comments } = await CommentApi.getList(this.clip.id, request)
      this.comments = comments
    }
  }
}

</script>
<style>
</style>
