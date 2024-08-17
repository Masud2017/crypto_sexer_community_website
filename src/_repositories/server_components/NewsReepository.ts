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
    async getNews(uid:string) {
        let resArr:any[] =[]
        console.log("User id : ",uid);

        await this.fireStore.collection(this.collectionName).doc(uid).collection("userPosts").get().then(item=> {
            item.docs.forEach(item2=> {
                if (item2.exists) {
                    console.log(item2.data.toString())
                    resArr.push({"docId" : item2.id,"data":item2.data()});
                }
                
            })
        });

        return resArr;
    } // specific
    async getAllNews() {}
    async deleteNews() {}
    async updateNews() {}


}

export default NewsRepository;