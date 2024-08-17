import { firestoreAdmin } from "@/config/firebase_admin";
import { connectFirestoreEmulator, doc } from "firebase/firestore";

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

    async getMyPosts(uid:string):Promise<any[]> {
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
    }

    async deletePost(uid:string, docId:string): Promise<boolean> {
        try{
            await this.fireStore.collection(this.collectionName).doc(uid).collection("userPosts").doc(docId).delete();
            return true;
        }catch(e) {
            return false;
        }
        
    }

    async getAllPost():Promise<any[]> {
        let collectionGroupList = await this.fireStore.collection(this.collectionName).get();
        let uidList:any[] = ["Xd109Ah15BWEl33niYiJUCskg6d2"];
        let postList:any[] = [];

        collectionGroupList.docs.forEach(item => {
            console.log(item.id);
            uidList.push(item.id);
        })

        console.log("Inspecting the content of uidList ", uidList);

        uidList.forEach(async item => {
            await this.fireStore.collection(this.collectionName).doc(item).collection("userPosts").get().then(userPostCollection=> {
                userPostCollection.docs.forEach(async posts=> {
                    let post = await posts.data();
                    console.log("check post ",post);
                    postList.push(post);
                })
            })
        })

        console.log("outside of the call back : ",postList)

        return postList;
    }
}

export default PostRepository;