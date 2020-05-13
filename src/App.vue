<template>
  <div id="app">
    <myheader></myheader>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import myheader from './components/common/myheader'

export default {
  name: 'App',
  components: {
    myheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  padding-top: 70px;
}
#download {
  text-align: center;
}
#canvas {
  margin: 10px auto;
  display: block;
}
label {
  margin: 0.5em 0 0 0;
}
</style>
