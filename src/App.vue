<template>
  <div id="app" v-cloak>
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
[v-cloak] {
  display: none;
}
body {
  padding-top: 60px;
}
#download {
  text-align: center;
}
#canvas {
  margin: 10px auto 10px;
  display: block;
}
label {
  margin: 0.5em 0 0 0;
}
#visualcube img {
  margin: 10px auto 10px;
  display: block;
}
input[type="color" i] {
    -webkit-appearance: square-button;
    width: 100%;
    height: 38px;
    display: block;
}
</style>
