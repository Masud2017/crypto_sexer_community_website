// // import "server-only"
// "use server"

// import { firestoreAdmin } from "@/config/firebase_admin";
// import { DocumentData } from "firebase/firestore";
// import { collection } from "firebase/firestore/lite";

// interface AddUserDetailsReturnType {
//     success : boolean,
//     errorMsg : string,
// }
// class UserRepository {
//     private fireStore:FirebaseFirestore.Firestore;
//     private collectionName:string;
//     private document:DocumentData;

//     constructor() {
//         this.fireStore = firestoreAdmin;
//         this.collectionName = "users"
        
        
//     }
    
//     public async addUserDetails(uid : string): Promise<AddUserDetailsReturnType> {
//         let collectionReference = await this.fireStore.collection(this.collectionName).doc(uid).get();
//         if (collectionReference.exists) {
//             return {success: false, errorMsg: "The user details already exists in the db"};
//         } else {
//             this.fireStore.collection(this.collectionName).add()
//         }


        

//         return {success: false, errorMsg: "Something very odd has happened"};
            
//     }


// }

// export default UserRepository;