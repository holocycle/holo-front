<template>
  <div>
    <Movies
      :video-id="clip.videoId"
      :title="clip.title"
      :chips="chips"
      :start="clip.beginAt"
      :end="clip.endAt"
      :description="clip.description"
      :related-movie-previews="relatedMoviePreviews"
      :recommended-movie-previews="recommendedMoviePreviews"
    />
  </div>
</template>
<script>
import Movies from '../../components/template/Movies'
import ClipsApi from '../../lib/api/clips'

export default {
  components: {
    Movies
  },
  async asyncData (ctx) {
    const clipId = ctx.params.id
    const { clip } = await ClipsApi.getByClipId(clipId)
    return {
      clip
    }
  },
  data () {
    return {
      clip: null,
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
  }
}

</script>
<style>
</style>
