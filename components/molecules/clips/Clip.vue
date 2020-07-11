<template>
  <div>
    <YoutubeIframe
      :video-id="videoId"
      :start="start"
      :end="end"
    />
    <v-layout>
      <h2 class="c-text-base">{{ title }}</h2>
      <v-spacer />
      <FavoriteStartIcon
        v-show="showFavoriteStar()"
        :favorite="favorite"
        @starClicked="starClicked"
      />
    </v-layout>
    <v-layout>
      <v-spacer />
      <p class="c-text-base">
        再生時間: <b>{{ end - start | formatTime }}</b>
        (開始: <b>{{ start | formatTime }}</b>
        終了: <b>{{ end | formatTime }}</b>)
      </p>
    </v-layout>
    <v-chip v-for="tag in tags" :key="tag.name" class="ma-2" :color="tag.color" label>
      <v-icon left>
        mdi-account-circle-outline
      </v-icon>
      {{ tag.name }}
    </v-chip>
    <TextWithLineBreaks>{{ descriptions }}</TextWithLineBreaks>
  </div>
</template>

<script>
import FavoriteStartIcon from '../../atoms/icon/FavoriteStarIcon'
import YoutubeIframe from '../../atoms/youtube/YoutubeIframe'
import TextWithLineBreaks from '../../atoms/textField/TextWithLineBreaks'

export default {
  components: {
    FavoriteStartIcon,
    YoutubeIframe,
    TextWithLineBreaks
  },
  props: {
    videoId: {
      type: String,
      required: true
    },
    start: {
      type: Number,
      required: false,
      default: null
    },
    end: {
      type: Number,
      required: false,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: false,
      default: null
    },
    descriptions: {
      type: String,
      required: false,
      default: ''
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  filters: {
    formatTime (time) {
      const hours = Math.floor(time / 60)
      const minute = time % 60
      return hours + ':' + minute
    }
  },
  methods: {
    starClicked () {
      if (this.favorite) {
        this.$emit('deleteFavorite')
      } else {
        this.$emit('putFavorite')
      }
    },
    showFavoriteStar () {
      console.log('showFavoriteStar called')
      console.log(this.$store.getters['login/login'])
      return this.$store.getters['login/login']
    }
  }
}
</script>
