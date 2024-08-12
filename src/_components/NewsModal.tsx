"use client"

import MoreVert from "@mui/icons-material/MoreVert";
import { Box, Card, CardHeader, IconButton, Modal, Paper, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/router";
import Link from "next/link";

export default function NewsModal({child} : {child: ReactNode}) {
    return (
        <Modal
            open={true}
            onClose={()=> {}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{height : "100%"}} marginTop={"2rem"} marginBottom={"2rem"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Card elevation={5} sx={{backgroundColor: "neutral.main",color : "primary.main",height: "85%",padding : ".5rem", width : "35rem"}}>
                    <CardHeader title = {"YOYO"}/>
                {child}
                </Card>
            </Box>
        </Modal>
    );
}