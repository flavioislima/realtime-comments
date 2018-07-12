import Rebase from 're-base'
import firebase from 'firebase'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDAH8kMfMBgSCt0acUvu3Y4MK0n2e8H0Ko",
    authDomain: "reactjs-faea2.firebaseapp.com",
    databaseURL: "https://reactjs-faea2.firebaseio.com",
    projectId: "reactjs-faea2",
    storageBucket: "",
    messagingSenderId: "331907314578"
})

const base = Rebase.createClass(app.database())
export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider(),
    'google': new firebase.auth.GoogleAuthProvider()
}
export const auth = firebase.auth()
export default base


