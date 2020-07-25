<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title>
        タグ追加
        <v-spacer />
        <v-btn icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-chip
              v-for="(tag, i) in tags"
              :key="'SetTag tag' + i"
              close
              @click:close="tags.splice(i, 1)"
            >
              {{ tag.name }}
            </v-chip>
          </v-row>
          <v-row>
            <v-text-field
              v-model="tagSearchKey"
              @change="getTagSuggestions"
            />
          </v-row>
          <v-row>
            <v-list>
              <v-list-item
                v-for="(suggestedTag, index) in suggestedTags"
                :key="'SetTag suggestList ' + index"
                @click="addTags(suggestedTag)"
              >
                <v-list-item-icon>
                  <v-icon>mdi-plus-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="c-text-base">
                    {{ suggestedTag.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { ListTagsRequest } from 'holo-back'
import TagApi from '../../lib/api/tags'

export default {
  components: {},
  props: {
    dialog: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      tags: [],
      suggestedTags: [],
      tagSearchKey: ''
    }
  },
  watch: {
    tagSearchKey: {
      immediate: true,
      async handler (key) {
        const request = new ListTagsRequest()
        request.key = key
        await TagApi.get(request).then(
          (response) => {
            this.suggestedTags = response.tags
          }
        )
      }
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    addTags (tag) {
      this.tags.push(tag)
      this.$emit('setTags', this.tags)
    }
  }
}
</script>

<style scoped>
</style>
