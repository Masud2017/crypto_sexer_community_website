"use client"
import { Box, Chip } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout ({children} : {children: ReactNode}) {
    let path = usePathname();
    
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Box display = "flex" gap = "2rem" marginTop={"1.5rem"}>
                {(path == "/post") ? <Link href = "/post"><Chip color="neutral" label= "My posts" /></Link> : <Link href = "/post"><Chip label= "My posts" /></Link>}
                {(path == "/post/all_posts") ? <Link href = "/post/all_posts"><Chip color="neutral" label= "All posts" /></Link> : <Link href = "/post/all_posts"><Chip label= "All posts" /></Link>}
                {(path == "/post/shorts") ? <Link href = "/post/shorts"><Chip color="neutral" label= "Shorts" /></Link> : <Link href = "/post/shorts"><Chip label= "Shorts" /></Link>}
                {(path == "/post/notices") ? <Link href = "/post/notices"><Chip color="neutral" label= "Notices" /></Link> : <Link href = "/post/notices"><Chip label= "Notices" /></Link>}
                {(path == "/post/events") ? <Link href = "/post/events"><Chip color="neutral" label= "Events" /></Link> : <Link href = "/post/events"><Chip label= "Events" /></Link>}


            </Box>
        {children}
        </Box>
    );
}