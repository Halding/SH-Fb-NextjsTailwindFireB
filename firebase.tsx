import { initializeApp } from "firebase/app";
import "firebase/storage"

import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCsZkTDJ3a9wP50hd2B-qIRrjOD7AyWPwk",
    authDomain: "firstnextjs.firebaseapp.com",
    projectId: "firstnextjs",
    storageBucket: "firstnextjs.appspot.com",
    messagingSenderId: "1087129712343",
    appId: "1:1087129712343:web:d492428854a128cbe5a292"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const storage = getStorage(app);


export {db,storage}


