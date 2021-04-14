<template>
  <v-app-bar app class="primary lighten-1">
    <v-app-bar-nav-icon
      @click="$emit('toggle-drawer')"
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
</template>
<script>
import { mdiAccount } from "@mdi/js"

export default {
  data() {
    return {
      icons: {
        mdiAccount
      }
    }
  }
}
</script>
