<template>
  <div>
    <v-card class="mx-auto">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>
            <h2>ユーザ情報</h2>
          </v-list-item-title>
          <v-list-item-subtitle>
            <a :href="googlePersonalInfo" target="_blank">googleアカウント情報</a>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-spacer />
        <v-btn icon :to="editUrl">
          <v-icon>mdi-account-edit</v-icon>
        </v-btn>
      </v-list-item>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-row>
                <v-col cols="3">
                  id
                </v-col>
                <v-col cols="8">
                  {{ loginUser.id }}
                </v-col>
                <v-col cols="1">
                  <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        v-bind="attrs"
                        v-on="on"
                      >
                        mdi-help-circle-outline
                      </v-icon>
                    </template>
                    <span>googleアカウントとは別採番のid。変更不可</span>
                  </v-tooltip>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-row>
                <v-col cols="3">
                  name
                </v-col>
                <v-col cols="8">
                  {{ loginUser.name }}
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-list-item-content>
              <v-row>
                <v-col cols="3">
                  icon
                </v-col>
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
                <v-col cols="3">
                  email
                </v-col>
                <v-col cols="8">
                  {{ loginUser.email }}
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
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
    },
    editUrl: {
      type: String,
      required: true
    },
    googlePersonalInfo: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
</style>
