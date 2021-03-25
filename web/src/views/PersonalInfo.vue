<template>
  <div class="personal-info">
    <div style="height:300px" class="d-flex personal-info-bar">
      <img
        src="../assets/paidashin.jpeg"
        height="100px"
        class="personal-info-avatar-img"
      />
      <div class="d-flex personal-info-basic">
        <p class="mr-4 personal-info-basic-name">Jason</p>
        <v-chip
          small
          color="grey darken-1"
          class="mr-2 mt-2 personal-info-basic-chip"
          >Vue</v-chip
        >
        <v-chip
          small
          color="grey darken-1"
          class="mr-2 mt-2 personal-info-basic-chip"
          >Vue</v-chip
        >
      </div>
    </div>
    <v-container>
      <div style="height:300px">123</div>
      <div style="height:300px">123</div>
      <div style="height:300px">123</div>
    </v-container>
  </div>
</template>
<script></script>
<style lang="scss">
.personal-info {
  .personal-info-bar {
    background: linear-gradient(#d2e3ff, rgb(139, 180, 255));
    padding: 10px;
    position: relative;
    .personal-info-avatar-img {
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: -40px;
      left: 50px;
      border-radius: 50%;
    }
    .personal-info-basic {
      position: absolute;
      bottom: 0;
      left: 200px;
      .personal-info-basic-name {
        color: white;
        font-size: 24px;
      }
      .personal-info-basic-chip {
        color: white;
      }
    }
  }
}
</style>
