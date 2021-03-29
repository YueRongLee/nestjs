<template>
  <div class="home-main-goods">
    <v-container class="home-main-goods-content flex-wrap">
      <v-card
        color="#f5f5f5"
        class="mt-4 ml-2 mr-2 home-main-goods-content-card"
        max-width="200px"
        v-for="i in 9"
        :key="i"
      >
        <v-img
          class="black--text align-end"
          height="200px"
          src="https://i.imgur.com/2ZTM0X2.png"
          contain
        >
          <v-card-title>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon small v-bind="attrs" v-on="on" color="primary">{{
                  icons.mdiThumbUp
                }}</v-icon>
              </template>
              <span>推薦單品</span>
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
import { mdiThumbUp } from "@mdi/js"
export default {
  data() {
    return {
      icons: {
        mdiThumbUp,
      },
    }
  }
}
</script>
<style lang="scss">
.home-main-goods {
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
