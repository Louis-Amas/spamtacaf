<template>
    <div>
        <v-content>
            <v-layout row wrap justify-center pt-5>
                <v-flex md3 offset-md2>
                    <v-btn color="success" @click="goToLogin">Login</v-btn>
                </v-flex>
                <v-flex md3>
                    <v-btn color="success" @click="goToHome">Home</v-btn>
                </v-flex>
                <v-flex md3>
                    <v-btn color="success" @click="goToCaf">CAF</v-btn>
                </v-flex>
            </v-layout>
        </v-content>
    </div>
</template>

<script>
    export default {
        name: 'Router',
        props: {
            msg: String
        },
        methods: {
            goToLogin() {
                this.$router.push('/login');
            },
            goToHome() {
                this.$router.push('/home');
            },
            goToCaf() {
                this.$router.push('/caf');
            },
        }
    }
</script>

<style>

</style>