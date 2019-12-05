<template>
    <div>
        <v-toolbar dark class="green darken-3">
            <v-toolbar-title class="headline text-upper">
                <span>CAF</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                    <v-btn color="red lighten-2" dark v-on="on">
                        {{ name }}
                    </v-btn>
                </template>
                <v-card>

                    <v-card-title class="headline grey lighten-2" primary-title>
                        Choisir un nom :
                    </v-card-title>

                    <v-container fluid>

                        <v-layout row wrap>
                            <v-flex md4 offset-md-4 pt-5 pb-0>
                                <v-text-field label="name" v-model="name" placeholder="Votre nom" solo @keypress.enter="dialog = false">
                                </v-text-field>
                            </v-flex>
                            <v-flex md12>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" outlined  @click="dialog = false" style="margin-right : 10px;">
                                        Valider
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>

                </v-card>
            </v-dialog>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: 'Caf',
        props: {
            msg: String
        }
    }
</script>

<style>

</style>
