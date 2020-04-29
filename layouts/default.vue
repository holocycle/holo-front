<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item v-if="item.action" :key="item.title" :to="item.action">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-item>
          <v-divider v-else-if="item.divider" :key="index" />
          <v-subheader v-else-if="item.header" :key="item.header">
            {{ item.header }}
          </v-subheader>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-icon>mdi-triangle</v-icon>
      <v-toolbar-title to="" v-text="title"/>
      <v-spacer/>
      <v-btn
        color="primary"
        to="/help"
      >
        このサイトについて
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
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
      items: [
        { action: '/', title: 'ページトップ', icon: 'mdi-home' },
        { divider: true },
        { header: 'ライバー一覧' },
        { action: '/livers/marine', title: '宝鐘マリン', icon: 'mdi-home' },
        { action: '/livers/miko', title: 'さくらみこ', icon: 'mdi-home' },
        { divider: true },
        { header: '動画' },
        { action: '/', title: '人気の動画一覧', icon: 'mdi-groups' },
        { divider: true },
        { header: '設定' },
        { action: '/', title: 'ユーザ設定', icon: 'mdi-groups' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'holocycle'
    }
  }
}
</script>
