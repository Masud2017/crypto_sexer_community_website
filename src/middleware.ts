"use server"
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authAdmin, createAdminApp } from "./config/firebase_admin";
import { getServerSession } from "next-auth/next"
import {authOptions} from "../pages/api/auth/[...nextauth]";
import { validateJwtToken } from "./_utils/Validator";


export async function middleware(req: NextRequest ) {
    const session = await getServerSession(authOptions);
    let jwtToken = req.headers.get("bearer");
    console.log("From middle : "+ session?.expires);
    // if (session?.user) {
    //     console.log("Hello world from middleware your user is authenticated");
    // } else {
    //     console.log("Hello world from middleware your user is not authenticated")

    // }
    // NextResponse.next();
    if (await validateJwtToken(jwtToken ?? "")) {
        NextResponse.next();
    }
    return NextResponse.rewrite("/401");
}

export const config = {
    matcher: '/',
  }