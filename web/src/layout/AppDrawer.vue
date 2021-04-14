<template>
  <v-navigation-drawer v-model="myDrawer" fixed temporary>
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
</template>
<script>
import { mdiCircleSmall, mdiImageFilterNone } from "@mdi/js"
export default {
  props: ["drawer"],
  data() {
    return {
      myDrawer: null,
      icons: {
        mdiCircleSmall,
        mdiImageFilterNone,
      },
    }
  },
  watch: {
    drawer(data) {
      this.myDrawer = data
    },
  },
}
</script>
