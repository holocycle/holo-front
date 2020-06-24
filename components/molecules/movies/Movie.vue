<template>
  <div>
    <YoutubeIframe
      :video-id="videoId"
      :start="start"
      :end="end"
    />
    <div>
      <v-layout>
        <h2>{{ title }}</h2>
        <v-spacer />
        <FavoriteStartIcon
          :favorite="favorite"
          @starClicked="starClicked"
        />
        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-layout>
    </div>
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
  methods: {
    starClicked () {
      if (this.favorite) {
        this.$emit('deleteFavorite')
      } else {
        this.$emit('putFavorite')
      }
    }
  }
}
</script>
