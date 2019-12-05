<template>
  <div>

    <v-toolbar dark class="green darken-3">
      <v-toolbar-title class="headline text-upper">
        <span>BELOTE</span>
        <span class="font-weight-light"> CONTRÉE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-upper">
        <span>BELOTE</span>
        <span class="font-weight-light"> CONTRÉE</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex md4>
          <v-btn color="success">Home</v-btn>
        </v-flex>
        <v-flex md4>
          <v-card>
            <v-card-title primary-title>
              title
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
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