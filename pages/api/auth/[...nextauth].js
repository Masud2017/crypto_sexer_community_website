import NextAuth from "next-auth"
import {getAuth, signInWithEmailAndPassword} from "../../../src/config/firebase_web";
import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";



export const authOptions = {
  pages:{
    signIn:"/login",
    signOut:"/logout"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        return await signInWithEmailAndPassword(getAuth(),credentials.email,credentials?.password).then(userCred=>{
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
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ]
}
export default NextAuth(authOptions)