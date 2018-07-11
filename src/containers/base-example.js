import Rebase from 're-base'
import firebase from 'firebase'

//Use this file to put your Firebase configurations here and then rename it to base.js

const app = firebase.initializeApp({
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "",
    messagingSenderId: "xxx"
})

const base = Rebase.createClass(app.database())
export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}
export const auth = firebase.auth()
export default base
