<template>
    <div>
        <v-content>
            <section>
                <v-parallax dark src="../assets/caf2.jpg" height="500">
                    <v-row align="center" justify="center">
                        <v-col class="text-center " cols="12">
                            <h1 class="display-2 font-weight-bold mb-4">SPAM TA CAF</h1>
                            <h4 class="display-1 font-weight-bold white--text">Aide d'autres étudiants à recevoir des
                                réponses en renvoyant leur emails</h4>
                        </v-col>
                    </v-row>

                </v-parallax>
            </section>

            <section>
                <v-layout column wrap class="my-12" align-center>
                    <v-flex xs12 sm4 class="my-4">
                        <div class="text-center">
                            <h2 class="headline">La meilleure manière de se faire entendre</h2>
                            <span class="subheading font-italic">
                est de forcer l'autre à t'écouter.
              </span>
                        </div>
                    </v-flex>
                    <v-flex xs12>
                        <v-container grid-list-xl>
                            <v-layout row wrap align-center>
                                <v-flex xs12 md4>
                                    <v-card flat class="transparent">
                                        <v-card-text class="text-center" color="primary">
                                            <v-icon x-large class="blue--text">mdi-podium</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center" @click="clickedRank">
                                            <div class="headline text-center">Classement des emails spammés</div>
                                        </v-card-title>
                                        <v-card-text align="center" >
                                            Classement des emails postés en fonction du nombre de spams.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card flat class="transparent">
                                        <v-card-text class="text-center">
                                            <v-icon x-large class="blue--text">mdi-email-search</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center" @click="clickedDiscover">
                                            <div class="headline">Découvre d'autres emails</div>
                                        </v-card-title>
                                        <v-card-text align="center">
                                            Vote pour les emails récemment postés en les spammant à ton tour !
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-card flat class="transparent">
                                        <v-card-text class="text-center">
                                            <v-icon x-large class="blue--text">mdi-book-open-page-variant</v-icon>
                                        </v-card-text>
                                        <v-card-title primary-title class="layout justify-center" @click="clickedHistory">
                                            <div class="headline text-center">Mon historique de spammeur</div>
                                        </v-card-title>
                                        <v-card-text align="center">
                                            Consulte les emails qui ont mérité ton spam dernièrement.
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-layout justify-center>
                                <v-btn class="mt-12" color="blue" dark large @click="goToHome">
                                    Retour à l'accueil
                                </v-btn>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-layout>
            </section>

        </v-content>
    </div>
</template>

<script>
    export default {
        name: 'Caf',
        props: {
            msg: String
        },
        methods: {
            goToHome() {
                this.$router.push('/home');
            },

            clickedRank(){
                this.$router.push('/rank');
            },
            clickedDiscover(){
                this.$router.push('/discover');
            },
            clickedHistory(){
                this.$router.push('/history');
            }
        }
    }
</script>

<style>

</style>
