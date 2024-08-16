import PostRepository from "@/_repositories/server_components/PostRepository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    let postRepo = new PostRepository();
    let res = await postRepo.getAllPost();

    return NextResponse.json(res);
}