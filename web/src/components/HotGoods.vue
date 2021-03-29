<template>
  <div class="home-main-goods">
    <v-container class="home-main-goods-content flex-wrap">
      <v-card
        color="#f5f5f5"
        class="mt-4 ml-2 mr-2 home-main-goods-content-card"
        max-width="200px"
        v-for="i in 10"
        :key="i"
      >
        <v-img
          class="black--text align-end"
          height="200px"
          src="https://i.imgur.com/2ZTM0X2.png"
          contain
        >
          <v-card-title style="background: rgb(245, 245, 245, .5)">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon small v-bind="attrs" v-on="on" color="red" class="ml-2">{{
                  icons.mdiCardsHeart
                }}</v-icon>
              </template>
              <span>我的最愛</span>
            </v-tooltip>
            <v-spacer></v-spacer>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon small v-bind="attrs" v-on="on" color="primary" class="ml-2">{{
                  icons.mdiThumbUp
                }}</v-icon>
              </template>
              <span>推薦</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon small v-bind="attrs" v-on="on" color="orange" class="ml-2">{{
                  icons.mdiStar
                }}</v-icon>
              </template>
              <span>眾人好感: xx/ 10</span>
            </v-tooltip>
          </v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">
          Number10
        </v-card-subtitle>
        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="orange" text>
            加到最愛
          </v-btn>

          <v-btn color="orange" text>
            加到購物車
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { mdiThumbUp, mdiCardsHeart, mdiStar } from "@mdi/js"
export default {
  data() {
    return {
      icons: {
        mdiThumbUp,
        mdiCardsHeart,
        mdiStar
      },
    }
  }
}
</script>
<style lang="scss">
.home-main-goods {
  flex: 1;
  background: linear-gradient(
    to right,
    #b1e2ff,
    #caefff,
    #fff,
    #caefff,
    #b1e2ff
  );
  .home-main-goods-content {
    display: flex;
    .home-main-goods-content-card {
      flex: 1;
    }

    @media screen and (max-width: 455px) {
      .home-main-goods-content-card {
        max-width: 500px !important;
      }
    }
  }
}
</style>
