import "server-only";
import firebaseAdminJson from "./firebase.json";
import admin, { ServiceAccount } from "firebase-admin";

import fs from 'fs';
import path from 'path';

const app = createAdminApp();

let authAdmin: admin.auth.Auth;
let firestoreAdmin: admin.firestore.Firestore;

authAdmin = admin.auth(app);
firestoreAdmin = admin.firestore(app);

const serviceAccount : ServiceAccount = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), 'config', "firebase.json"), 'utf8')
  );
console.log(serviceAccount)
export function createAdminApp() {
    if (admin.apps.length > 0) {
        return admin.app();
    }
    return admin.initializeApp({
    
        credential: admin.credential.cert("./firebase.json"),
    });
}

export {firestoreAdmin,authAdmin}

