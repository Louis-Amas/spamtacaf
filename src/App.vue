<template>
  <div id="app">
    <v-container grid-list-xs>

      <!--       <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <v-layout column>
        <v-layout row wrap>
          <v-flex md12>
            <img alt="Vue logo" src="./assets/logo.png">
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-space-around>
          <v-flex md4>
            <v-btn flat color="success">Du sale</v-btn>
          </v-flex>
          <v-flex md4>
            <v-btn flat color="error">Du tres sale</v-btn>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  /*   import HelloWorld from './components/HelloWorld.vue'
   */
  export default {
    name: 'app',
    components: {
      /* HelloWorld */
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
