
<template>
        <v-img src="../assets/yellow.jpg" height="100vh">
            <v-container fill-height fill-width>
                <v-layout row wrap justify-space-around align-center>
                    <v-flex md12 sm12 xs12 justify-content>
                        <h1  style="opacity: 0.5" align="center" class="display-3 font-weight-bold ma-0 black--text">Etunder.</h1>
                        <h4 align="center" class= "display-1 font-weight-thin ma-0 black--text">Share with students.</h4>
                    </v-flex>
                <v-flex :class="{'ma-10': $vuetify.breakpoint.smAndDown}" md5 sm5 xs12 justify-start>
                        <v-card color="rgb(255, 255, 255, 0.6)">
                            <v-card-title primary-title class="justify-center">
                                Connexion
                            </v-card-title>
                            <v-form>
                                <v-container fluid >
                                    <v-layout row wrap>
                                        <v-flex md8 sm8 xs8 offset-md-2 offset-sm-2 offset-xs-2
                                                :class="{'ml-5': $vuetify.breakpoint.smAndDown}">
                                            <v-text-field label="Pseudo" v-model="username_connexion" placeholder="Pseudo"/>
                                        </v-flex>
                                        <v-flex md8 sm8 xs8 offset-md-2 offset-sm-2 offset-xs-2
                                                :class="{'ml-5': $vuetify.breakpoint.smAndDown}">
                                            <v-text-field name="name" label="Mot de passe" placeholder="Mot de passe" v-model="password_connexion" hint="At least 8 characters" min="8" :type="'password'"></v-text-field>
                                        </v-flex>
                                        <v-flex md8 sm8 xs8 offset-md-4 offset-sm-4 offset-xs-4
                                                :class="{'ml-5': $vuetify.breakpoint.smAndDown}">
                                            <v-btn color="success"> Se connecter </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-form>
                        </v-card>

                    </v-flex>

                    <v-flex md5>
                        <v-card color="rgb(255, 255, 255, 0.8)">
                            <v-card-title primary-title class="justify-center">
                                Inscription
                            </v-card-title>
                            <v-form  @submit="addStudent" id="formregister">
                                <v-container fluid>
                                    <v-layout row wrap>
                                        <v-flex md8 sm8 xs8 offset-md-2 offset-sm-2 offset-xs-2
                                                :class="{'ml-5': $vuetify.breakpoint.smAndDown}">
                                            <v-text-field label="Prénom" v-model="firstname" placeholder="Prénom"/>
                                        </v-flex>
                                        <v-flex md8 sm8 xs8 offset-md-2 offset-sm-2 offset-xs-2
                                                :class="{'ml-5': $vuetify.breakpoint.smAndDown}">
                                            <v-text-field label="Nom" v-model="name" placeholder="Nom"/>
                                        </v-flex>
                                        <v-flex md8 sm8 xs8 offset-md-2 offset-sm-2 offset-xs-2
                                                :class="{'ml-5': $vuetify.breakpoint.smAndDown}">
                                            <v-text-field label="Pseudo" v-model="username" placeholder="Pseudo"/>
                                        </v-flex>
                                        <v-flex md8 sm8 xs8 offset-md-2 offset-sm-2 offset-xs-2
                                                :class="{'ml-5': $vuetify.breakpoint.smAndDown}">
                                            <v-text-field name="name" label="Mot de passe" placeholder="Mot de passe" v-model="password" hint="At least 8 characters" min="8" :type="'password'"></v-text-field>
                                        </v-flex>
                                        <v-flex md8 sm8 xs8 offset-md-4 offset-sm-4 offset-xs-4
                                                :class="{'ml-5': $vuetify.breakpoint.smAndDown}">
                                            <v-btn type="submit" form="formregister" color="success">S'enregistrer</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>s
                            </v-form>
                            {{this.studentslist}}
                        </v-card>

                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return{
                studentslist: [],
                username1: '',
                password1: '',
                firstname1: '',
                name1: ''
            }
        },
        methods: {
            addStudent: function(){
                this.studentslist.push({username: this.username1, password: this.password1 , firstname: this.firstname1, name: this.name1});
            },
        }
    }
</script>

<style>

</style>
