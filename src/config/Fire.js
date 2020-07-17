import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyCakUro8OMo-d6jG8bg2D4YVHve67O2poI",
  authDomain: "proyectofinal-d9269.firebaseapp.com",
  databaseURL: "https://proyectofinal-d9269.firebaseio.com",
  projectId: "proyectofinal-d9269",
  storageBucket: "proyectofinal-d9269.appspot.com",
  messagingSenderId: "944469470486",
  appId: "1:944469470486:web:94ebb6a46b66f3b5ec3437"
};
const fire = firebase.initializeApp(config);
export default fire;
