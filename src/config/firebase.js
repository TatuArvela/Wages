import firebase from "firebase/app";
import "firebase/database"

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const timesRef = databaseRef.child("times");
export const wagesRef = databaseRef.child("wages");