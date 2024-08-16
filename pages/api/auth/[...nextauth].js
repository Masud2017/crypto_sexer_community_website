import NextAuth from "next-auth"
import {getAuth, signInWithEmailAndPassword} from "../../../src/config/firebase_web";
import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";



export const authOptions = {
  pages:{
    signIn:"/login"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        return await signInWithEmailAndPassword(getAuth(),credentials?.email,credentials?.password).then(userCred=>{
          console.log(getAuth().credentials.email);
          console.log("Authentcation done ..")
          if (userCred.user) {
              return userCred.user;
          } else {
              return null;
          }
        }).catch(err=> {
          console.log(err)
        });
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
}
export default NextAuth(authOptions)