import { firestoreAdmin } from "@/config/firebase_admin";
import { doc } from "firebase/firestore";

class PostRepository {
    private fireStore:FirebaseFirestore.Firestore;
    private collectionName = ";"
    constructor() {
        this.fireStore = firestoreAdmin;
        this.collectionName = "posts";
    }

    async addPost(title:string, body:string, uid:string) {

        // let res = await this.fireStore.collection(this.collectionName).doc(uid).set({title: title, body: body, createdAt: new Date(Date.now()).toLocaleString()});
        await this.fireStore
                                    .collection(this.collectionName)
                                    .doc(uid)
                                    .collection("userPosts")
                                    .doc() // post id
                                    .set({
                                            title: title, 
                                            body: body, 
                                            createdAt: new Date(Date.now()).toLocaleString()
                                        },
                                        {
                                            merge:true
                                        });
    }

    async getMyPosts(uid:string):Promise<FirebaseFirestore.DocumentData | undefined> {
        let res = await this.fireStore.collection(this.collectionName).doc(uid).get();

        if (res.exists) {
            return res.data();
        }

        return undefined;
    }

    async deletePost(uid:string, index:BigInteger): Promise<boolean> {
        let allPosts = await this.fireStore.collection(this.collectionName).doc(uid).get();
        return false;
    }


}

export default PostRepository;