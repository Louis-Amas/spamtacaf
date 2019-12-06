<template>
    <div>
        <v-content>
            <section>
                <v-parallax dark height="500" src="../assets/student.png">
                    <v-row>
                        <v-col cols="4">
                        </v-col>
                        <v-col align-self="center" class="text-center" cols="4">
                            <h1 class="display-2 font-weight-bold mb-4">Etunder</h1>
                            <h4 class="display-1 font-weight-light white--text">Trouve ton compagnon de galère</h4>
                        </v-col>
                        <v-col class="text-right" cols="4">
                            <v-btn color="white" icon outlined x-large>
                                <v-icon dark>mdi-account</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-parallax>
            </section>

            <section>
                <v-layout align-center class="my-12" column wrap>
                    <v-flex class="my-4" sm4 xs12>
                        <div class="text-center">
                            <h2 class="headline">La meilleure manière de s'en sortir</h2>
                            <span class="subheading font-italic">
                quand les services ne suivent plus...
              </span>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <v-container grid-list-xl>
                            <v-layout align-center row wrap>
                                <v-flex md4 xs12>
                                    <v-card class="transparent" flat>
                                        <v-card-text class="text-center" color="primary">
                                            <v-icon class="success--text" x-large>mdi-account-badge-horizontal</v-icon>
                                        </v-card-text>
                                        <v-card-title class="layout justify-center" primary-title>
                                            <div class="headline text-center">Définir ses besoins</div>
                                        </v-card-title>
                                        <v-card-text>
                                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                            ornare.
                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                            ac turpis egestas.
                                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                            Suspendisse potenti.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex md4 xs12>
                                    <v-card class="transparent" flat>
                                        <v-card-text class="text-center">
                                            <v-icon class="success--text" x-large>mdi-account-search</v-icon>
                                        </v-card-text>
                                        <v-card-title class="layout justify-center" primary-title>
                                            <div class="headline">Matchmaking perso</div>
                                        </v-card-title>
                                        <v-card-text>
                                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                            ornare.
                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                            ac turpis egestas.
                                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                            Suspendisse potenti.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex md4 xs12>
                                    <v-card class="transparent" flat>
                                        <v-card-text class="text-center">
                                            <v-icon class="success--text" x-large>mdi-flash</v-icon>
                                        </v-card-text>
                                        <v-card-title class="layout justify-center" primary-title>
                                            <div class="headline text-center">Plan Z</div>
                                        </v-card-title>
                                        <v-card-text>
                                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt
                                            ornare.
                                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames
                                            ac turpis egestas.
                                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                                            Suspendisse potenti.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </section>

            <section>
                <v-parallax height="380" src="../assets/book.jpg">
                    <v-layout align-center column justify-center>
                        <div class="headline black--text mb-4 text-center">Web development has never been easier</div>
                        <em class="grey--text">Kick-start your application today</em>
                        <v-btn @click="goToLogin" class="mt-12" color="primary" dark large>
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
