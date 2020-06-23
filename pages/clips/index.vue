<template>
  <div>
    <Movies
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
import Movies from '../../components/template/Movies'
import ClipsApi from '../../lib/api/clips'
import CommentApi from '../../lib/api/comment'

export default {
  components: {
    Movies
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
        }, {
          name: '宝鐘マリン',
          color: '#F7002F'
        }, {
          name: '兎田ぺこら',
          color: '#4DE4FF'
        }, {
          name: 'さくらみこ',
          color: '#FFA4CF'
        }, {
          name: '歌ってみた'
        }, {
          name: 'tag2'
        }
      ],
      relatedMoviePreviews: [
        {
          to: '/movies/HKb9JfeA2-Y',
          url: 'https://img.youtube.com/vi/HKb9JfeA2-Y/mqdefault.jpg',
          subTitle: '中笑いのくだり'
        }, {
          to: '/movies/lwbGo-O6buc',
          url: 'https://img.youtube.com/vi/lwbGo-O6buc/mqdefault.jpg',
          subTitle: '切り抜き動画を見る紫咲シオン'
        }
      ],
      recommendedMoviePreviews: [
        {
          to: '/movies/X9zw0QF12Kc',
          url: 'https://img.youtube.com/vi/X9zw0QF12Kc/mqdefault.jpg',
          subTitle: 'サクラカゼ'
        }, {
          to: '/movies/9nD7aQ_cKAM',
          url: 'https://img.youtube.com/vi/9nD7aQ_cKAM/mqdefault.jpg',
          subTitle: 'バレンタインキッス'
        }, {
          to: '/movies/xccH7xxG5zc',
          url: 'https://img.youtube.com/vi/xccH7xxG5zc/mqdefault.jpg',
          subTitle: 'ここにタイトルが入る'
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
