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
    <div class="table-content">
      <table border="5">
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
    </div>
    <div class="table-content">
      <table border="5">
        <tr>
          <th>id</th>
          <th>name</th>
          <th :colspan="messageMaxLength">messages</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <template v-if="user.messages.length === messageMaxLength">
            <td v-for="m in user.messages" :key="m.id">
              {{ m.id }} - {{ m.description }}
            </td>
          </template>
          <template
            v-else-if="
              user.messages.length !== messageMaxLength &&
                user.messages.length !== 0
            "
          >
            <td v-for="m in user.messages" :key="m.id">
              {{ m.id }} - {{ m.description }}
            </td>
            <td :colspan="messageMaxLength - user.messages.length">
              -
            </td>
          </template>
          <template v-else>
            <td :colspan="messageMaxLength">-</td>
          </template>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag"

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      messageMaxLength: 0,
    }
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
              username
              password
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
              username
              password
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
            username
            password
            messages {
              id
              description
            }
          }
        }
      `,
      result({ data }) {
        data.users.forEach((user) => {
          if (user.messages.length > this.messageMaxLength) {
            this.messageMaxLength = user.messages.length
          }
        })
      },
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.table-content {
  margin: 20px;
  display: flex;
  justify-content: center;
}

tr:nth-child(even) {
  background-color: lightblue;
}
</style>
