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
                <v-layout justify-center ma-10 row wrap>
                    <v-flex md8>
                        <v-lazy :options="{threshold: .5}" transition="slide-x-transition" v-model="isActive">
                            <v-card tile>
                                <v-layout row wrap>
                                    <v-flex md5>
                                        <v-container pb-0 pt-0>
                                            <v-img src="../assets/precarite.jpg"></v-img>
                                        </v-container>
                                    </v-flex>
                                    <v-flex align-self-center md7 pa-8>
                                        <v-card-title class="layout justify-center" primary-title>La précarité étudiante
                                        </v-card-title>
                                        <v-card-text class="text-justify">Près de 10% des étudiant·e·s sont
                                            confronté·e·s à
                                            des situations aigües de précarité qui augmentent
                                            leurs risques de décrochage et compromettent leurs chances de réussite dans
                                            l’enseignement
                                            supérieur. Beaucoup abandonnent leurs études, ou subissent des redoublements
                                            et
                                            réorientations
                                            multiples.
                                        </v-card-text>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-lazy>
                    </v-flex>
                </v-layout>
                <v-layout justify-center ma-10 row wrap>
                    <v-flex md8>
                        <v-lazy :options="{threshold: .5}" transition="slide-x-transition" v-model="isActive">
                            <v-card tile>
                                <v-layout row wrap>
                                    <v-flex align-self-center md7 pa-8>
                                        <v-card-title class="layout justify-center" primary-title>Un éparpillement des
                                            ressources
                                        </v-card-title>
                                        <v-card-text class="text-justify">Les services que proposent les établissements
                                            universitaires, eux-mêmes gérés par des
                                            administrations différentes, dans des lieux
                                            multiples, avec des horaires différents : bourses,
                                            aides exceptionnelles et exonérations, santé,
                                            logement, orientation, aménagements d’étude...<br>
                                            Les droits auprès de diverses institutions :
                                            tarifications solidaires dans les transports, CAF,
                                            Couverture Mutuelle Universelle...<br>
                                            Le soutien apporté par les associations :
                                            distributions alimentaires, soutien académique,
                                            domiciles intergénérationnels, ateliers-vélo,
                                            ressourceries...
                                        </v-card-text>
                                    </v-flex>
                                    <v-flex md5>
                                        <v-container pb-0 pt-0>
                                            <v-img src="../assets/maze.jpg"></v-img>
                                        </v-container>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-lazy>
                    </v-flex>
                </v-layout>
                <v-layout justify-center ma-10 row wrap>
                    <v-flex md8>
                        <v-lazy :options="{threshold: 0.5}" transition="slide-x-transition" v-model="isActive">
                            <v-card tile>
                                <v-layout row wrap>
                                    <v-flex md5>
                                        <v-container pb-0 pt-0>
                                            <v-img src="../assets/harry.jpg"></v-img>
                                        </v-container>
                                    </v-flex>
                                    <v-flex align-self-center md7 pa-8>
                                        <v-card-title class="layout justify-center" primary-title>Une fragilisation
                                            sociale
                                            et morale
                                        </v-card-title>
                                        <v-card-text class="text-justify">Déficit du soutien familial, sentiment de
                                            vulnérabilité et de honte, déficit de maîtrise des ‘codes’ administratifs,
                                            sociaux… pour comprendre et se conformer aux
                                            procédures en vigueur, non-recours aux droits : désillusion, perte de
                                            confiance, épuisement moral
                                        </v-card-text>
                                    </v-flex>
                                </v-layout>
                            </v-card>
                        </v-lazy>
                    </v-flex>
                </v-layout>
            </section>
            <section>
                <v-parallax height="380" src="../assets/book.jpg">
                    <v-layout align-center column justify-center>
                        <div class="headline black--text mb-4 text-center">Notre mission</div>
                        <em class="black--text">Augmenter le
                            pouvoir d’agir étudiant et institutionnel</em>
                        <div class="black--text mt-4 text-center">Faciliter l’identification des ressources et la
                            circulation entre les informations<br>Favoriser la transmission pair-à-pair, par des
                            étudiants (experts) en direction d’étudiants (plus
                            novices)<br>Développer de nouveaux canaux de
                            communication<br>
                        </div>
                    </v-layout>
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
                        <div class="headline black--text mb-4 text-center">Accéder à mon espace</div>
                        <em class="black--text">Connexion ou Inscription</em>
                        <v-btn @click="goToLogin" class="mt-12" color="primary" dark large>
                            Connexion
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
