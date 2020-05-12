<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" app>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item v-if="item.action" :key="item.title" :to="item.action">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-else-if="item.divider" :key="index" />
          <v-subheader v-else-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <nuxt-link to="/" tag="div">
        <v-icon>mdi-triangle</v-icon>
      </nuxt-link>
      <nuxt-link to="/" tag="div">
        <v-toolbar-title to="/" v-text="title" />
      </nuxt-link>
      <v-spacer />
      <v-btn to="/help" icon>
        <v-icon>mdi-help-circle-outline</v-icon>
      </v-btn>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item-group>
            <v-list-item key="createClip">
              <v-list-item-icon>
                <v-icon>mdi-content-cut</v-icon>
              </v-list-item-icon>
              <v-list-item-content icon @click="moveToClipCreate">切り抜き作成</v-list-item-content>
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
      <v-btn icon to="/login">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'holocycle'
    }
  },
  computed: {
    items () {
      // items on left side menu
      return [
        {
          action: '/',
          title: 'ページトップ',
          icon: 'mdi-home'
        },
        { divider: true },
        { header: 'ライバー一覧' },
        ...this.liverItems,
        { divider: true },
        { header: '動画' },
        {
          action: '/',
          title: '人気の動画一覧',
          icon: 'mdi-groups'
        },
        { divider: true },
        { header: '設定' },
        {
          action: '/',
          title: 'ユーザ設定',
          icon: 'mdi-groups'
        }
      ]
    },
    liverItems () {
      const livers = this.$store.state.liver.list // : Array<Liver>
      return livers.map(liver => ({
        action: '/livers/' + liver.id,
        title: liver.name,
        icon: 'mdi-home'
      }))
    }
  },
  methods: {
    moveToClipCreate () {
      this.$router.push({ path: '/clips/create' })
    }
  }
}
</script>
