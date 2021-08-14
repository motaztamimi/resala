import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp(firebaseConfig);
const dataBase = firebase.firestore();
const storage = firebase.storage();
const firebaseConfig = {
  apiKey: "AIzaSyCqTBBWWhy2udZ9Ogei0BcQG0hPJFQWtLI",
  authDomain: "resala-16d7e.firebaseapp.com",
  projectId: "resala-16d7e",
  storageBucket: "resala-16d7e.appspot.com",
  messagingSenderId: "244046651882",
  appId: "1:244046651882:web:506b7fef68f40a62155293",
};
export { dataBase, storage };
