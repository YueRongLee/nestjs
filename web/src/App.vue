<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/soldier.jpg" height="200px" width="150px">
    <HelloWorld msg="Welcome to This App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(rgb(215, 245, 240), #d0eeff, #f8f8f8);
}
</style>
