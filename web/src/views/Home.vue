<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/soldier.jpg" height="200px" width="150px">
    <HelloWorld msg="Welcome to My Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
