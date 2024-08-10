import "server-only"

import { getFireStoreAdmin } from "@/config/fireabase_services";
import { collection } from "firebase/firestore/lite";

interface AddUserDetailsReturnType {
    success : boolean,
    errorMsg : string,
}

class UserRepository {
    private fireStore:FirebaseFirestore.Firestore;
    private collectionName:string;

    constructor() {
        this.fireStore = getFireStoreAdmin();
        this.collectionName = "users"
    }

    public async addUserDetails(uid : string): Promise<AddUserDetailsReturnType> {
        let collectionReference = await this.fireStore.collection(this.collectionName).doc(uid).get();
        if (collectionReference.exists) {
            return {success: false, errorMsg: "The user details already exists in the db"};
        }
        

        return {success: false, errorMsg: "Something very odd has happened"};
            
    }


}