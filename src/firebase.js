import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGTOY80u3DT6UI58kln25Tw1ol11v4MX0",
  authDomain: "comic-book-34934.firebaseapp.com",
  projectId: "comic-book-34934",
  storageBucket: "comic-book-34934.appspot.com",
  messagingSenderId: "689154921997",
  appId: "1:689154921997:web:ecff8071000be63238a744",
  measurementId: "G-W3N6MTSTNH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;