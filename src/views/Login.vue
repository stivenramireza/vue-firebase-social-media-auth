<template>
    <v-layout justify-center mt-5>
        <v-flex xs12 sm8 md6 xl4>
            <v-card>

                <v-card-text class="display-1 text-uppercase white--text text-center" :class="register ? 'success' : 'accent'">
                    <span v-if="!register">Login</span>
                    <span v-if="register">Register</span>
                </v-card-text>

                <v-card-text>
                    <v-btn block color="error" class="mb-2" @click="google">
                        <v-icon left dark>fab fa-google</v-icon>
                        Google
                    </v-btn>
                    <v-btn block color="info" @click="facebook">
                        <v-icon left dark>fab fa-facebook-f</v-icon>
                        Facebook
                    </v-btn>
                </v-card-text>

                <v-card-text>
                    <v-btn block @click="register = true" v-if="!register">Don't you have an account? Register here</v-btn>
                    <v-btn block @click="register = false" v-if="register">Do you already have an account? Login here</v-btn>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'
import { firebase, auth, db } from '@/firebase'
import router from '@/router'
export default {
    name: 'login',
    data(){
        return{
            register: false
        }
    },
    methods: {
        ...mapMutations(['newUser']),
        facebook(){
            console.log('facebook')
            const provider = new firebase.auth.FacebookAuthProvider()
            this.login(provider)
        },
        google(){
            console.log('google')
            const provider = new firebase.auth.GoogleAuthProvider()
            this.login(provider)
        },
        async login(provider){
            firebase.auth().languageCode = 'es'
            try {
                const result = await firebase.auth().signInWithPopup(provider)
                const user = result.user
                console.log(user)

                // User
                const userObject = {
                    name: user.displayName,
                    email: user.email,
                    uid: user.uid,
                    photo: user.photoURL
                }
                this.newUser(userObject)

                // Save in Firestore
                await db.collection('users').doc(userObject.uid).set(
                    userObject
                )
                console.log('User has been saved successfully')
                router.push({name: 'home'})
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>