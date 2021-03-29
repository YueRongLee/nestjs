<template>
  <v-app id="app">
    <v-app-bar app class="primary lighten-1">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        style="color: white"
      ></v-app-bar-nav-icon>
      <v-toolbar-title style="color: white">{{
        $route.meta.title
      }}</v-toolbar-title>
      <v-spacer />
      <v-btn icon style="color: white">
        <v-icon>{{ icons.mdiAccount }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <template v-for="(item, i) in 10">
          <v-list-item
            color="primary"
            :key="i"
            :to="item.link === '#' ? null : item.link"
            link
          >
            <v-list-item-action>
              <v-icon>{{ icons.mdiImageFilterNone }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title link>
                {{ item }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main id="main-content" class="grey lighten-5" >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mdiCircleSmall, mdiImageFilterNone, mdiAccount } from "@mdi/js"
export default {
  data: () => ({
    drawer: null,
    icons: {
      mdiCircleSmall,
      mdiImageFilterNone,
      mdiAccount,
    },
  }),
}
</script>

<style lang="scss">
#app {
  display: flex;
  overflow: hidden;
}
</style>
