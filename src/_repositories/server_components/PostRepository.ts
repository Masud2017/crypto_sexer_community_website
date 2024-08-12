import { firestoreAdmin } from "@/config/firebase_admin";

class PostRepository {
    private fireStore:FirebaseFirestore.Firestore;
    constructor() {
        this.fireStore = firestoreAdmin;
        this.collecitonName = "posts";
    }



}

export default PostRepository;