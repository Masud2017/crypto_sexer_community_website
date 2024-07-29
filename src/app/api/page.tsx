"use client"

import { Box, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic"; // segment config for forcing this component to be dynamic

export default async function Page() {
    const [s,setS] = useState(false);
    useEffect(()=> {
        for (let i = 0; i < 31003;i++){
            console.log(i);
        }
        setS(true);
    },[]);
    return (
        <>
        {s && <Container>
            Hello world this is inside a container
        </Container>}
        </>
    );
}