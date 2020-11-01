import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
require("dotenv").config();

interface FirebaseConfig {
	apiKey: string;
	authDomain: string;
	databaseURL: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId: string;
}

const config: FirebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_DATABASEURL,
	projectId: process.env.REACT_APP_PROJECTID,
	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_APPID,
	measurementId: process.env.REACT_APP_MEASUREMENTID,
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const firebaseAuth = firebase.auth();
const firebaseFirestore = firebase.firestore();

export { firebaseAuth, firebaseFirestore };
