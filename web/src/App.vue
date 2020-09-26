<template>
  <div id="app">
    <div id="nav" class="row">
      <div class="offset-9 col-3">
        <button v-if="!isLoginPage" class="btn btn-warning" @click="logout">Logout</button>
      </div>
    </div>
    <router-view class="main-content" />
  </div>
</template>
<script>
import { onLogout } from "./vue-apollo"
export default {
  data() {
    return {
      isLoginPage: false
    }
  },
  watch: {
    '$route'(data) {
      if(data.name === 'Login') {
        this.isLoginPage = true;
      } else {
        this.isLoginPage = false;
      }
    }
  },
  methods: {
    async logout() {
      const apolloProvider = this.$apollo.provider.clients.defaultClient
      onLogout(apolloProvider)
      this.$router.push('/login')
    },
  },
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(rgb(249, 255, 164), #aae0ff, #fff3f3);
}

#nav {
  padding: 30px;
  height:40px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.main-content {
  flex: 1;
  min-height: 90vh;
}
</style>
