import PostRepository from "@/_repositories/server_components/PostRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    let postRepo = new PostRepository();

    let query = req.nextUrl.searchParams;
    console.log(query.get("uid"));
    let postList = await postRepo.getMyPosts(query.get("uid")?? "");
    return NextResponse.json({postList});
}



interface ReqBody {
    title:string,
    body:string,
    uid:string
}

export async function POST(req: NextRequest) {
    let data = await req.json();
    let parsedData:ReqBody = data;
    

    let postRepo = new PostRepository();
    await postRepo.addPost(parsedData.title, parsedData.body, parsedData.uid);
    

    // console.log("YOYOYOYOI ",parsedData.msg);
    return NextResponse.json(data);
}

export async function DELETE(req: NextRequest) {
    let searchparams = req.nextUrl.searchParams;
    let uid:string= searchparams.get("uid") ?? "";
    let docId:string = searchparams.get("docId") ?? "";

    let postRepo = new PostRepository();

    return NextResponse.json({"status": await postRepo.deletePost(uid,docId)});
}