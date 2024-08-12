import { firestoreAdmin } from "@/config/firebase_admin";
import { firestore } from "firebase-admin";

class NoticeRepository {
    private fireStore:firestore.Firestore= null;
    private collectionName = ";"
    constructor() {
        this.fireStore = firestoreAdmin
        this.collectionName = "notices";
    }
}

export default NoticeRepository;