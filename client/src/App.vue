<template>
<div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <MsgComponent />
  </div>
</template>

<script>
import MsgComponent from './components/MsgComponent.vue'

export default {
  name: 'App',
  components: {
    MsgComponent
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
  margin-top: 60px;
}
</style>
