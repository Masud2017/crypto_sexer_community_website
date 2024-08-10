// import { signOut as firebaseSignOut } from "firebase/auth";
import { signOut as signOutNextAuth } from "next-auth/react";
// import { getAuth } from "../../config/firebase_web";
import { RedirectType, redirect } from "next/navigation";

export async function GET() {
    // let auth = getAuth();

    // firebaseSignOut(auth);
    debugger;
    signOutNextAuth();

    return redirect("/api/hello",RedirectType.push);
}