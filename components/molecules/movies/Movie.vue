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
        <v-btn icon>
          <v-icon color="yellow">
            mdi-star
          </v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-layout>
    </div>
    <v-chip v-for="chip in chips" :key="chip.name" class="ma-2" :color="chip.color" label>
      <v-icon left>
        mdi-account-circle-outline
      </v-icon>
      {{ chip.name }}
    </v-chip>
    <TextWithLineBreaks>{{ descriptions }}</TextWithLineBreaks>
  </div>
</template>

<script>
import YoutubeIframe from '../../atoms/youtube/YoutubeIframe'
import TextWithLineBreaks from '../../atoms/textField/TextWithLineBreaks'

export default {
  components: {
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
    chips: {
      type: Array,
      required: false,
      default: null
    },
    descriptions: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
