"use client"

import { Chip, Paper, Typography } from "@mui/material";
import Link from "next/link";
import ErrorIcon from '@mui/icons-material/Error';

export default function ChatErrorBox () {
    return (
        <Paper sx={{padding:"0.3rem", margin: "1rem", display : "flex", flexDirection: "column", alignItems: "center"}} >
            <ErrorIcon sx = {{height : "5rem",width: "5rem"}} />
            <Typography paddingBottom={"3rem"} variant="h5" align="center" display="inline">You need to be authenticated to access this feature.</Typography>                                
            <Link href = "/login"> <Chip variant="contained" color = "neutral" label = "Signin"/></Link>
        </Paper>

        
    );
}