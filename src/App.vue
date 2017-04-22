<template>
  <v-app top-toolbar>
    <header>
      <v-toolbar>
        <v-toolbar-logo>Klassikal</v-toolbar-logo>
      </v-toolbar>
    </header>
    <main>
      <v-content>
        <v-container fluid>
          <v-list>
            <v-list-item v-for="link in links" :key="link.id">
              <v-list-tile :href="link.href" target="_blank">
                <v-list-tile-title>{{ link.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>
<script>
  export default {
    data() {
      return {
        links: [
          {
            id: 0,
            title: 'Vuetify Documentation',
            href: 'http://vuetifyjs.com'
          },
          {
            id: 1,
            title: 'Vuetify SSR Webpack',
            href: 'https://github.com/vuetifyjs/webpack-ssr'
          },
          {
            id: 2,
            title: 'Vuetify Webpack',
            href: 'https://github.com/vuetifyjs/webpack'
          },
          {
            id: 3,
            title: 'Vuetify Webpack Simple',
            href: 'https://github.com/vuetifyjs/webpack-simple'
          },
          {
            id: 4,
            title: 'Vue Awesome',
            href: 'https://github.com/vuejs/awesome-vue'
          }
        ]
      }
    }
  }
</script>
<style lang="stylus">
  @import './stylus/main'
</style>
