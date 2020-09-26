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
import gql from "graphql-tag"
import { onLogin } from "../vue-apollo"

export default {
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    async submit() {
      const result = await this.$apollo.mutate({
        mutation: gql`
          mutation login($username: String!, $password: String!) {
            login(username: $username, password: $password)
          }
        `,
        variables: {
          username: this.username,
          password: this.password,
        },
      })

      if (result) {
        const apolloProvider = this.$apollo.provider.clients.defaultClient
        onLogin(apolloProvider, result.data.login)

        this.$router.push("/home-page")
      }
    },
  },
}
</script>
