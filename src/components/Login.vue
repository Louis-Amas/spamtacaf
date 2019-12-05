
<template>
    <div>
        <v-container>
            <v-layout row wrap justify-space-between>
                <v-flex md5>
                    <v-card class="align-center">
                        <v-card-title primary-title class="justify-center">
                            Connexion
                        </v-card-title>
                            <v-form>
                                <v-container fluid>
                                    <v-layout row wrap>
                                        <v-flex md8 offset-md-2 >
                                            <v-text-field label="Pseudo" v-model="username" placeholder="Pseudo"/>
                                        </v-flex>
                                        <v-flex md8 offset-md-2 >
                                            <v-text-field name="name" label="Mot de passe" placeholder="Mot de passe" v-model="password" hint="At least 8 characters" min="8" :type="'password'"></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-form>
                        </v-card>
                    
                </v-flex>

                    <v-flex md5>
                        <v-card>
                        <v-card-title primary-title class="justify-center">
                            Inscription
                        </v-card-title>
                            <v-form>
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
                                    </v-layout>
                                </v-container>
                            </v-form>
                        </v-card>
                        
                    </v-flex>
                </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        props: {
            msg: String
        }
    }
</script>

<style>

</style>
