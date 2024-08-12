import { NextRequest, NextResponse } from "next/server";

export async function GET() {

}

interface ReqBody {
    name:string,
    msg:string
}

export async function POST(req: NextRequest) {
    let data = await req.json();
    let parsedData:ReqBody = data;
    console.log("YOYOYOYOI ",parsedData.msg);
    return NextResponse.json(data);
}