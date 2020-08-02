// FIXME: 暫定
<template>
  <div>
    <LiverDetail
      :name="liver.name"
      :channel-url="channelUrl"
      :avatar-url="liver.channel.mediumThumbnailUrl"
      :banner-url="liver.channel.mediumBannerUrl"
      :channel-subscriber="liver.channel.subscriberCount"
      :latest-movies="latestClipList"
      :popular-movies="topRateClipList"
    />
  </div>
</template>

<script>
import { ListClipsRequest } from 'holo-back'
import LiverDetail from '../../components/template/LiverDetail'
import LiverApi from '../../lib/api/livers'
import ClipsApi from '../../lib/api/clips'

export default {
  components: {
    LiverDetail
  },
  async asyncData (ctx) {
    const liverId = ctx.params.id
    const { liver } = await LiverApi.getBy(liverId)

    const latestReq = new ListClipsRequest()
    latestReq.limit = 10
    latestReq.orderBy = 'latest'
    latestReq.Tags = [liver.name]
    const latestClipList = await ClipsApi.get(latestReq)

    const toplateReq = new ListClipsRequest()
    toplateReq.limit = 10
    toplateReq.orderBy = 'toprated'
    toplateReq.Tags = [liver.name]
    const topRateClipList = await ClipsApi.get(toplateReq)

    return {
      liver,
      latestClipList: latestClipList.clips.map((clip) => {
        return {
          to: '/clips/' + clip.id,
          imageUrl: clip.video.mediumThumnailUrl,
          title: clip.title,
          favoriteCount: clip.favoriteCount,
          publishedAt: clip.video.publishedAt
        }
      }),
      topRateClipList: topRateClipList.clips.map((clip) => {
        return {
          to: '/clips/' + clip.id,
          imageUrl: clip.video.mediumThumnailUrl,
          title: clip.title,
          favoriteCount: clip.favoriteCount,
          publishedAt: clip.video.publishedAt
        }
      }),
    }
  },
  data () {
    return {
      latestMovies: [
        {
          to: '/movies/X9zw0QF12Kc',
          imageUrl: 'https://img.youtube.com/vi/X9zw0QF12Kc/mqdefault.jpg',
          text: '【歌ってみた】サクラカゼ'
        }, {
          to: '/movies/9nD7aQ_cKAM',
          imageUrl: 'https://img.youtube.com/vi/9nD7aQ_cKAM/mqdefault.jpg',
          text: '【歌ってみた】バレンタインキッス'
        }, {
          to: '/movies/xccH7xxG5zc',
          imageUrl: 'https://img.youtube.com/vi/xccH7xxG5zc/mqdefault.jpg',
          text: 'コンセプト'
        }
      ],
      popularMovies: [
        {
          to: '/movies/X9zw0QF12Kc',
          imageUrl: 'https://img.youtube.com/vi/X9zw0QF12Kc/mqdefault.jpg',
          text: '【歌ってみた】サクラカゼ'
        }, {
          to: '/movies/9nD7aQ_cKAM',
          imageUrl: 'https://img.youtube.com/vi/9nD7aQ_cKAM/mqdefault.jpg',
          text: '【歌ってみた】バレンタインキッス'
        }, {
          to: '/movies/xccH7xxG5zc',
          imageUrl: 'https://img.youtube.com/vi/xccH7xxG5zc/mqdefault.jpg',
          text: 'コンセプト'
        }
      ]
    }
  },
  computed: {
    channelUrl () {
      return 'https://www.youtube.com/channel/' + this.liver.channel.id
    }
  }
}
</script>

<style scoped>
</style>
