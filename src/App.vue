<template>
  <div id="app">
    <Home />
    <DirecTive />
  </div>
</template>

<script>
import Home from './components/home.vue'
import DirecTive from './components/directive'

export default {
  name: 'App',
  components: {
    Home,
    DirecTive
  }
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
