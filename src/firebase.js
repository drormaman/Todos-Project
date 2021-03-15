import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAjkV-gQJGyELTYemXOsww7o6-okiY-mtY",
	authDomain: "firestore-todo-40043.firebaseapp.com",
	projectId: "firestore-todo-40043",
	storageBucket: "firestore-todo-40043.appspot.com",
	messagingSenderId: "908731931248",
	appId: "1:908731931248:web:0e68fd68fa17f6b04572b5",
};
const app = firebase.initializeApp(firebaseConfig);

export { app as firebase };
