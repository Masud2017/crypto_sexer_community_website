import { firestoreAdmin } from "@/config/firebase_admin";

class NewsRepository {
    private fireStore:FirebaseFirestore.Firestore = null;
    private collectionName = "";

    constructor() {
        this.fireStore = firestoreAdmin;
        this.collectionName = "news"
    }

    async addNews(uid:string,title:string, body:string):Promise<boolean> {
        try{
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

                        return true;
        } catch(e) {
            return false;
        }
    }
    async getNews() {} // specific
    async getAllNews() {}
    async deleteNews() {}
    async updateNews() {}


}

export default NewsRepository;