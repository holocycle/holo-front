<template>
  <Movies
    video-id="xccH7xxG5zc"
    start=2799
    end=2871
    title="このアプリのコンセプトを説明した動画"
    :chips="chips"
    description="ここに動画の説明が入る。"
    :related-movie-previews="relatedMoviePreviews"
    :recommended-movie-previews="recommendedMoviePreviews"
  />
</template>
<script>
import Movies from '../../components/template/Movies'

export default {
  components: {
    Movies
  },
  data () {
    return {
      chips: [
        {
          name: '宝鐘マリン',
          color: '#F7002F'
        }, {
          name: 'tag1'
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
