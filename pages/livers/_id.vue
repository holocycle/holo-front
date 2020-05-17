// FIXME: 暫定
<template>
  <div>
    <LiverDetail
      :name="liver.name"
      :channel-url="channelUrl"
      :avatar-url="liver.channel.mediumThumbnailUrl"
      :banner-url="liver.channel.mediumBannerUrl"
      :channel-subscriber="liver.channel.subscriberCount"
      :latest-movies="latestMovies"
      :popular-movies="popularMovies"
    />
  </div>
</template>

<script>
import LiverDetail from '../../components/template/LiverDetail'
import LiverApi from '../../lib/api/livers'

export default {
  components: {
    LiverDetail
  },
  async asyncData (ctx) {
    const liverId = ctx.params.id
    const { liver } = await LiverApi.getBy(liverId)
    return {
      liver,
    }
  },
  computed: {
    channelUrl () {
      return 'https://www.youtube.com/channel/' + this.liver.channel.id
    }
  },
  data() {
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
  }
}
</script>

<style scoped>
</style>
