import { authAdmin } from "@/config/firebase_admin";

async function validateJwtToken(token:string):Promise<boolean> {
    let auth = authAdmin;
    await auth.verifyIdToken(token).then(res => {
        if (res.uid.length > 0) {
            return true;
        }
    }).catch(e => console.log(e));
    return false;
}

export {validateJwtToken};