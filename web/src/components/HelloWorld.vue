<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <table border="1">
      <tr>
        <th>id</th>
        <th>description</th>
        <th>userId</th>
      </tr>
      <tr v-for="message in messages" :key="message.id">
        <td>{{ message.id }}</td>
        <td>{{ message.description }}</td>
        <td>{{ message.userId }}</td>
      </tr>
    </table>
    <table border="1">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>messages</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td v-for="m in user.messages" :key="m.id">
          {{m.id}} - {{m.description}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import gql from "graphql-tag"
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  apollo: {
    message: {
      query: gql`
        query message($id: String!) {
          message(id: $id) {
            id
            description
            userId
            user {
              id
              name
            }
          }
        }
      `,
      variables() {
        return {
          id: "3",
        }
      },
      result({ data }) {
        console.log(data)
      },
    },
    messages: {
      query: gql`
        query {
          messages {
            id
            description
            userId
            user {
              id
              name
            }
          }
        }
      `,
    },
    users: {
      query: gql`
        query {
          users {
            id
            name
            messages {
              id
              description
            }
          }
        }
      `,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
