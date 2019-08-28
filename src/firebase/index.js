import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDa82x69E0BsFPVnEqZr2JyHgTBVMMK6H4",
  authDomain: "example-ff561.firebaseapp.com",
  databaseURL: "https://example-ff561.firebaseio.com",
  projectId: "example-ff561",
  storageBucket: "example-ff561.appspot.com",
  messagingSenderId: "464116646767"
};
firebase.initializeApp(config);

const storage = firebase.storage()
const database = firebase.database()

export {
    storage, firebase, database as default
}
