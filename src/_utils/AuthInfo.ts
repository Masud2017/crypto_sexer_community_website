import { authAdmin } from "@/config/firebase_admin";

async function getCurrentUserUid(token:string):Promise<string> {
    return await authAdmin.verifyIdToken(token).then(decodedUserResponse=> decodedUserResponse.uid);
}

export {getCurrentUserUid};