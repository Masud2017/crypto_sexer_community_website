import { getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    sendEmailVerification, 
    sendPasswordResetEmail} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth/web-extension";

import firebase from "firebase/compat/app";
import {setCookie} from "cookies-next";
import { redirect } from "next/navigation";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

let app = firebase.initializeApp(firebaseConfig);
export {app};


export async function createFirebaseBaseSession() {
}
let auth = getAuth();
// onAuthStateChanged(auth,(user)=> {
//     if (auth.currentUser?.emailVerified == false) {
//         redirect("/");
//     }
//     setCookie("user_mail from onAuthState_changed",user?.email)

// })

let fireStoreClient = getFirestore(app);


export {getAuth,
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut, 
        sendEmailVerification, 
        sendPasswordResetEmail,
        fireStoreClient
    }