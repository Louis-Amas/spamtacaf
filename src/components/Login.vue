
<template>
        <v-img src="../assets/yellow.jpg" height="100vh">
            <v-container fill-height fill-width>
                <v-layout row wrap justify-space-around align-center>
                    <v-flex md5 justify-start>
                        <v-card color="rgb(255, 255, 255, 0.8)">
                            <v-card-title primary-title class="justify-center">
                                Connexion
                            </v-card-title>
                            <v-form>
                                <v-container fluid >
                                    <v-layout row wrap>
                                        <v-flex md8 offset-md-2 >
                                            <v-text-field label="Pseudo"  placeholder="Pseudo"/>
                                        </v-flex>
                                        <v-flex md8 offset-md-2 >
                                            <v-text-field name="name" label="Mot de passe" placeholder="Mot de passe" hint="At least 8 characters" min="8" :type="'password'"></v-text-field>
                                        </v-flex>
                                        <v-flex md8 offset-md-4>
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
                                        <v-flex md8 offset-md-2 >
                                            <v-text-field label="Prénom" v-model="firstname" placeholder="Prénom"/>
                                        </v-flex>
                                        <v-flex md8 offset-md-2 >
                                            <v-text-field label="Nom" v-model="name" placeholder="Nom"/>
                                        </v-flex>
                                        <v-flex md8 offset-md-2 >
                                            <v-text-field label="Pseudo" v-model="username" placeholder="Pseudo"/>
                                        </v-flex>
                                        <v-flex md8 offset-md-2 >
                                            <v-text-field name="name" label="Mot de passe" placeholder="Mot de passe" v-model="password" hint="At least 8 characters" min="8" :type="'password'"></v-text-field>
                                        </v-flex>
                                        <v-flex md8 offset-md-4>
                                            <v-btn type="submit" form="formregister" color="success">S'enregistrer</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-form>
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
                username: '',
                password: '',
                firstname: '',
                name: ''
            }
        },
        methods: {
            addStudent: function(){   
                this.studentslist.push({username: this.username, password: this.password , firstname: this.firstname, name: this.name}); 
            },
        }
    }
</script>

<style>

</style>
