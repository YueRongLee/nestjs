<template>
  <div id="login-content">
    <div>username: <input type="text" v-model="username" /></div>
    <div style="margin-top: 10px">
      password: <input type="password" v-model="password" />
    </div>

    <button style="margin-top: 40px" class="btn btn-success" @click="submit">送出</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    async submit() {
      this.$router.push("/home-page")
    },
  },
}
</script>
