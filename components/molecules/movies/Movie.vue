<template>
  <div>
    <iframe
      width="560"
      height="315"
      :src="url"
      frameborder="0"
      :allow="allow"
      allowfullscreen
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
    <p class="text-justify">
      {{ descriptions }}
    </p>
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        />

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        />
        <v-text-field
          v-else-if="item.sendComment"
          :key="item.sendComment"
          v-model="message"
          :append-outer-icon="message ? 'mdi-send' : 'mdi-send'"
          filled
          label="comment"
          type="text"
        />

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-subtitle v-html="item.name" />
            <v-list-item-title v-html="item.comment" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    allow: {
      type: String,
      required: false,
      default: 'accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture'
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
    },
  },
  data: () => ({
    message: '',
    items: [
      { header: '5件のコメント' },
      { sendComment: 'comment' },
      {
        divider: true,
        inset: true
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: 'user1',
        comment: '1get'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        name: 'user2',
        comment: 'てえてえ'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        name: 'user3',
        comment: 'てえてえ'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        name: 'user4',
        comment: 'てえてえ'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        name: 'user5',
        comment: 'てえてえ'
      }
    ]
  })
}
</script>

<style>
</style>
