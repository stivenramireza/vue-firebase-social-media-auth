const firebase = require('firebase/app')
require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')

const config = {
    apiKey: "AIzaSyD_hIC60mr8a0wwkPdDSewRicNUwb5PztE",
    authDomain: "social-media-auth-2ea0b.firebaseapp.com",
    databaseURL: "https://social-media-auth-2ea0b.firebaseio.com",
    projectId: "social-media-auth-2ea0b",
    storageBucket: "social-media-auth-2ea0b.appspot.com",
    messagingSenderId: "2247788865",
    appId: "1:2247788865:web:92b21ed555f646407539c0",
    measurementId: "G-70HNX75ZTM"
}

firebase.initializeApp(config);

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { firebase, db, auth, storage }