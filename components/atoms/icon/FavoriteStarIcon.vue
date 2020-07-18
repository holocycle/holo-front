<template>
  <v-btn icon @click="clicked">
    <v-icon :color="iconColor">
      mdi-star
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    favorite: {
      type: Boolean,
      required: false,
      default: false
    },
    switchFavorite: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  data: () => ({
    iconColor: 'grey'
  }),
  watch: {
    favorite: {
      immediate: true,
      handler (after) {
        this.iconColor = after ? 'yellow' : 'grey'
      }
    }
  },
  methods: {
    clicked () {
      this.$emit('starClicked')
    }
  }
}
</script>
