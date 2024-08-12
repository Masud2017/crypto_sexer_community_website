import UserRepository from "@/_repositories/client_components/UserRepository";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "@/config/firebase_web";
import { Auth} from "firebase/auth";

export default async function SignupUser(prevState: any,formData: FormData) {
    let name = formData.get("name")?.toString();
    let email : string = formData.get("email")?.toString()!;
    let password:string = formData.get("pass")?.toString()!;
    let role:string  = formData.get("role")?.toString()!;
    let userRepo = new UserRepository();

    let auth:Auth = getAuth()!;
    
    // createUserWithEmailAndPassword(auth,email,password).then(userCred => {
    //     userRepo.addUser(auth.currentUser?.uid ?? "",name ?? "");

    //     sendEmailVerification(auth.currentUser!).then(() => {
    //         // res.status(201).json({ message: "Verification email sent! User created successfully!" });
    //         console.log("This is the current user " + auth.currentUser?.uid);
    //         return {
    //           message: 'Please enter a valid email',
    //         }
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //         // res.status(500).json({ error: "Error sending email verification" });
    //       });
    //   }).catch(err=>{
    //     console.log(err);
    //   });

    let message = "";

      let res = await  createUserWithEmailAndPassword(auth,email,password).then(userCred => {
        userRepo.addUser(auth.currentUser?.uid ?? "", name ?? "");
      }).then(userCred=> sendEmailVerification(auth.currentUser!)).then(()=> message = "Verification").catch(e => message = e)

      return {message : message,isLoading : false};
}