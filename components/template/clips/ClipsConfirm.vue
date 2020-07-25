<template>
  <div>
    <h2 class="c-text-base">切り抜きを作成する</h2>
    <v-row>
      <v-col cols="4">
        <v-form>
          <v-text-field
            disabled="disabled"
            v-model="videoId"
            label="動画ID"
          />
          <v-text-field
            v-model="title"
            label="タイトル"
          />
          <v-textarea
            v-model="description"
            label="詳細"
          />
          <v-layout>
            <v-text-field
              v-model.number="start"
              disabled="disabled"
              label="開始時間(秒)"
            />
            <v-spacer />
            <v-text-field
              v-model.number="end"
              disabled="disabled"
              label="終了時間(秒)"
            />
          </v-layout>
          <v-container>
            <v-row>
              <v-chip
                v-for="(tag, i) in tags"
                :key="'tag' + i"
                close
                @click:close="tags.splice(i, 1)">
                {{ tag.name }}
              </v-chip>
            </v-row>
            <SetTag
              :dialog="dialog"
              @setTags="setTags"
              @close="closeDialog"
            />
            <v-btn color="primary" @click="dialog=!dialog">タグ追加</v-btn>
          </v-container>
          <v-layout>
            <v-btn
              color="primary"
              outlined
              @click="back"
            >
              戻る
            </v-btn>
            <v-spacer />
            <v-btn
              color="primary"
              @click="createClip"
            >
              作成
            </v-btn>
          </v-layout>
        </v-form>
      </v-col>
      <v-col cols="8">
        <v-card class="c-text-base">
          <v-card-title>プレビュー</v-card-title>
          <v-card-subtitle>ここで再生時間の確認ができます</v-card-subtitle>
          <v-card-text>
            <!--            <Clip-->
            <!--              :video-id="videoId"-->
            <!--              :start="start"-->
            <!--              :end="end"-->
            <!--              :title="title"-->
            <!--              :chips="chips"-->
            <!--              :descriptions="description"-->
            <!--            />-->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import Clip from '../../molecules/clips/Clip'
import SetTag from '../../dialog/SetTag'

export default {
  components: {
    SetTag
    // Clip
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
    }
  },
  data () {
    return {
      title: 'タイトルをここに記載',
      description: '詳細をここに記載\n改行も入る',
      tags: [],
      comments: [],
      dialog: false
    }
  },
  methods: {
    createClip () {
      const clip = {
        videoId: this.videoId,
        title: this.title,
        description: this.description,
        start: this.start,
        end: this.end,
        tags: this.tags
      }
      this.$emit('createClip', clip)
    },
    back () {
      this.$emit('back')
    },
    setTags (tags) {
      this.tags = tags
    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>
<style>
</style>
