import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "@/config/firebase_web";
import { firestore } from "firebase-admin";
import { Auth, User } from "firebase/auth";
import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export default async function SignupUser(formData: FormData) {
    let name = formData.get("name");
    let email : string = formData.get("email")?.toString()!;
    let password:string = formData.get("pass")?.toString()!;
    let role:string  = formData.get("role")?.toString()!;

    let auth:Auth = getAuth()!;
    
    createUserWithEmailAndPassword(auth,email,password).then(userCred => {
        console.log(userCred);
        console.log(userCred.user.displayName);
        sendEmailVerification(auth.currentUser!).then(() => {
            // res.status(201).json({ message: "Verification email sent! User created successfully!" });
            console.log("This is the current user " + auth.currentUser);
          })
          .catch((error) => {
            console.error(error);
            // res.status(500).json({ error: "Error sending email verification" });
          });
      }).catch(err=>{
        console.log(err);
      });
}