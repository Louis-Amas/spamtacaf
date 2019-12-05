<template>
  <div id="app">
    <v-toolbar dark class="green darken-3">
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">LANCER UNE PARTIE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn disabled>
        <span class="mr-2">lourd</span>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      msg: String
    }
  }
</script>

<style>

</style>