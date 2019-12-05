<template>
  <div>
    <v-content>
      <section>
        <v-parallax dark src="../assets/student.png" height="500">
          <v-row align="center" justify="center">
            <v-col class="text-center " cols="12">
              <h1 class="display-2 font-weight-bold mb-4">Etunder</h1>
              <h4 class="display-1 font-weight-light white--text">Trouve ton compagnon de galère</h4>
            </v-col>
          </v-row>
          <!-- <v-row md12>
            <v-col class="text-center" cols="4">
            </v-col>
            <v-col class="text-center" cols="4" justify>
              <div align="center">
                <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
                <h4 class="subheading">Build your application today!</h4>
              </div>
            </v-col>
            <v-col class="text-center" cols="4">
              <div align="end" justify="end">
                <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
                <h4 class="subheading">Build your application today!</h4>
              </div>
            </v-col>
          </v-row> -->
        </v-parallax>
      </section>

      <section>
        <v-layout column wrap class="my-12" align-center>
          <v-flex xs12 sm4 class="my-4">
            <div class="text-center">
              <h2 class="headline">La meilleure manière de s'en sortir</h2>
              <span class="subheading font-italic">
                quand les services ne suivent plus...
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center" color="primary">
                      <v-icon x-large class="success--text">mdi-account-badge-horizontal</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Definir ses besoins</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="success--text">mdi-account-search</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Matchmaking perso</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card flat class="transparent">
                    <v-card-text class="text-center">
                      <v-icon x-large class="success--text">mdi-flash</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Plan Z</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="../assets/book.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline black--text mb-4 text-center">Web development has never been easier</div>
            <em class="grey--text">Kick-start your application today</em>
            <v-btn class="mt-12" color="primary" dark large @click="goToLogin">
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
    </v-content>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      msg: String
    },
    methods: {
      goToLogin() {
        this.$router.push('/login');
      },
    }
  }
</script>

<style>

</style>