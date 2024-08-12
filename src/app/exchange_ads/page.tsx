"use client"

import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import { waitForDebugger } from "inspector";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";




export default function ExchangeAds() {
    const [fileArray, setFileArray] = useState([null]);
    const fileTypes = ["JPG", "PNG", "GIF"];

    useEffect(()=> {
        console.log(fileArray!);
    },[fileArray]);

    const fileUploadHandler = (file:any)=> {
        if (fileArray.length > 4) {
            alert("Sorry you can't upload more than four images for a specific section.");
        } else {
            fileArray.push(Object.assign(file, {preview : URL.createObjectURL(file)}));
        }
    }

    return(
        <Box padding ="2rem" display={"flex"} flexDirection={"column"} gap="1rem">
            {/* <Paper padding={".5rem"} bgcolor={"secondary.main"} height={"20rem"}> */}
            <Paper sx={{padding: ".5rem", backgroundColor: "secondary.main", height :"20rem"}} elevation = {3}>
                <Typography variant = "h6">Main page</Typography>
                <Divider/>
                <Box display = "flex">
                    <Box>
                        <FileUploader handleChange = {fileUploadHandler} name = "file" types = {fileTypes}/>
                        {/* {file != null ? <Image width={150} height = {150} src={file == null ? "":file["preview"]} alt = "Something went wrong"/> : <></>} */}
                        {fileArray.length > 1 ? <Box display = "flex" flexWrap={"wrap"} gap = "0.5rem">{fileArray.map(item => <Box height={"90px"} width = {"728px"} component={"img"} src={item == null ? "":item["preview"]} alt = "Something went wrong"/>)}</Box> : <></>}
                    </Box>

                    <Box></Box>
                </Box>

            </Paper>

        </Box>
    );
}