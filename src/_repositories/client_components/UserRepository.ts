"use client"

import { fireStoreClient } from "@/config/firebase_web";
import { Firestore, addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

interface UserStructure {
    name:string,
    role:string
    uid:string
}

class UserRepository {
    private fireStore:Firestore;

    constructor() {
        this.fireStore = fireStoreClient;
    }

    async addUser(uid:string, name:string) {
        let docRef = doc(this.fireStore,"users",uid);
       try{
        await setDoc(docRef ,{
            name: name,
            role: "user",
            createdAt: new Date(Date.now()).toLocaleString()
        },{merge:true});
       } catch(e) {
            console.log(e);
       }

    }

    async getUser(uid:string): Promise<UserStructure> {
        let user = await getDoc(doc(this.fireStore,"users",uid))
        if (user.exists()) {
            let data = user.data();
            return {name : data.name,role: data.role, uid : data.role};
        }
        return {name : "",role : "", uid: ""};

    }
}

export default UserRepository;