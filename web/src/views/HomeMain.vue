<template>
  <div class="home-main">
    <div style="height:20vh" class="d-flex home-main-bar">
      <div class="text-center home-main-title">
        發燒品項
      </div>
      <img src="../assets/paidashin.jpeg" class="home-main-avatar-img" />
    </div>
    <hot-goods />
  </div>
</template>
<script>
import HotGoods from '../components/HotGoods'
export default {
  components: {
    'hot-goods': HotGoods
  },
}
</script>
<style lang="scss">
.home-main {
  flex:1;
  display:flex;
  flex-direction: column;
  .home-main-bar {
    background: linear-gradient(#d2e3ff, rgb(139, 180, 255));
    position: relative;
    align-items: center;
    .home-main-title {
      flex: 1;
      font-size: 36px;
      color: rgb(24, 78, 255);
      text-shadow: 0px 3px 0px #97e2ff, 0px 14px 10px rgba(0, 0, 0, 0.15),
        0px 24px 2px #3131311a;
    }
    .home-main-avatar-img {
      position: absolute;
      bottom: -40px;
      left: 50px;
      border-radius: 50%;
      z-index: 1;
    }

    // >= lg
    @media screen and (min-width: 992px) {
      .home-main-avatar-img {
        height: 100px;
        width: 100px;
      }
    }
    // >= xs
    @media screen and (min-width: 576px) {
      .home-main-avatar-img {
        height: 80px;
        width: 80px;
      }
    }
    // < xs
    @media screen and (max-width: 576px) {
      .home-main-avatar-img {
        bottom: -20px;
        left: 20px;
        height: 50px;
        width: 50px;
      }
    }
    .home-main-basic {
      flex: 1;
      position: absolute;
      bottom: 0;
      left: 200px;
      .home-main-basic-name {
        color: white;
        font-size: 24px;
      }
      .home-main-basic-chip {
        color: white;
      }
    }
  }
}
</style>
