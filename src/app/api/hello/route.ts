import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
    console.log(cookies().get("next-auth.session-token")?.value)
    
    cookies().delete("hem")

    return NextResponse.json({"hello": cookies().get("next-auth.session-token")?.value})}