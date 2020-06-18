<template>
  <div>
    <v-card class="mx-auto">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>
            <h2>ユーザ情報更新</h2>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card-text>
        <v-form>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-row>
                  <v-col cols="3">id</v-col>
                  <v-col cols="8">{{loginUser.id}}</v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <v-list-item-content>
                <v-row>
                  <v-col cols="3">name</v-col>
                  <v-col cols="8">
                    <v-text-field
                      v-model="loginUser.name"
                      filled
                    />
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <v-list-item-content>
                <v-row>
                  <v-col cols="3">icon</v-col>
                  <v-col cols="8">
                    <Avatar size="70" :src="loginUser.iconUrl" />
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
            <v-divider />
            <v-list-item>
              <v-list-item-content>
                <v-row>
                  <v-col cols="3">email</v-col>
                  <v-col cols="8">
                    <v-text-field
                      v-model="loginUser.email"
                      filled
                    />
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          @click="submit"
        >
          更新
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    loginUser: {
      type: Object,
      required: true
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.loginUser)
    }
  }
}
</script>
<style>
</style>
