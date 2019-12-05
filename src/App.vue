<template>
  <div id="app">
    <img alt="Spam" src="./assets/spam.jpeg">
    <img alt="Ta" src="./assets/ta.png">
    <img alt="CAF" src="./assets/caf.png">
    <HelloWorld msg="SPAM TA CAF"/>
  </div>
  <v-app>
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
  import Home from './components/Home.vue'

  export default {
    name: 'app',
    components: {
      Home
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
