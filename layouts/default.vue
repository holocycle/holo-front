<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" color="primary" dark :mini-variant="miniVariant" :clipped="clipped" app>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item v-if="item.action" :key="item.title" :to="item.action" :disabled="item.disabled">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-else-if="item.divider" :key="index" />
          <v-subheader v-else-if="item.header" :key="item.header">
            {{ item.header }}
          </v-subheader>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="c-secondary-base" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="c-clickable">
        <nuxt-link to="/" tag="div">
          <v-icon class="c-primary-icon c-clickable">mdi-triangle</v-icon>
        </nuxt-link>
      </div>
      <div class="c-clickable">
        <nuxt-link to="/" tag="div">
          <v-toolbar-title class="c-primary-color" to="/" v-text="title" />
        </nuxt-link>
      </div>
      <v-spacer />
      <v-btn to="/help" icon>
        <v-icon>mdi-help-circle-outline</v-icon>
      </v-btn>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined class="c-primary-color" v-bind="attrs" v-on="on">
            <v-icon>mdi-plus</v-icon>
            切り抜き作成
          </v-btn>
        </template>

        <v-list>
          <v-list-item-group>
            <v-list-item key="createClip" :disabled="logining">
              <v-list-item-icon>
                <v-icon>mdi-content-cut</v-icon>
              </v-list-item-icon>
              <v-list-item-content icon @click="moveToClipCreate">
                切り抜き作成
              </v-list-item-content>
            </v-list-item>
            <v-list-item key="createClipList" disabled>
              <v-list-item-icon>
                <v-icon>mdi-paperclip</v-icon>
              </v-list-item-icon>
              <v-list-item-content>切り抜きリスト作成</v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <div>
        <v-btn v-if="!logining" color="primary" to="/login">
          <v-icon>mdi-account</v-icon>
          ログイン
        </v-btn>
        <v-btn v-else icon class="c-primary-color" to="/settings/me">
          <v-icon>fas fa-cog</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-content class="c-base">
      <v-container>
        <v-row>
          <v-col xs="0" sm="0" md="1" lg="1" xl="2" />
          <v-col xs="12" sm="12" md="10" lg="10" xl="8">
            <nuxt />
          </v-col>
          <v-col xs="0" sm="0" md="1" lg="1" xl="2" />
        </v-row>
      </v-container>
    </v-content>
    <v-footer class="c-secondary-base" app elevation="5">
      <span class="c-text-base">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      miniVariant: false,
      title: 'holocycle'
    }
  },
  computed: {
    logining () {
      return this.$store.getters['login/login']
    },
    items () {
      // items on left side menu
      return [
        {
          action: '/',
          title: 'ページトップ',
          icon: 'mdi-home'
        },
        { divider: true },
        {
          action: '/livers',
          title: 'ライバー一覧',
          icon: 'fab fa-youtube'
        },
        { divider: true },
        { header: '動画' },
        {
          action: '/clips/toprated',
          title: '人気順',
          icon: 'mdi-groups'
        },
        {
          action: '/',
          title: '投稿順',
          icon: 'mdi-groups',
          disabled: true
        },
        {
          action: '/',
          title: 'お気に入り',
          icon: 'mdi-groups',
          disabled: true
        },
        { divider: true },
        { header: 'ユーザ' },
        {
          action: '/users',
          title: 'ユーザ一覧',
          icon: 'mdi-account-multiple'
        },
        {
          action: '/settings/me',
          title: 'ユーザ設定',
          icon: 'fas fa-cog'
        }
      ]
    }
  },
  methods: {
    moveToClipCreate () {
      this.$router.push({ path: '/clips/create' })
    }
  }
}
</script>
