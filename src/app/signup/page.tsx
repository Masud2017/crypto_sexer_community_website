"use client"

import SignupForm from "@/_components/SignupForm";
import { Box, Button, Fab, InputAdornment, Paper, TextField } from "@mui/material";

export default function SignupPage() {
   
    
    
    return (
        <Box display = "flex" justifyContent="center" alignItems="center" height="100vh" >
            <Paper elevation={2}>
                <Box  width = "30rem" height = "35rem" display="flex" justifyContent="center" flexDirection="column" bgcolor="secondary.main" padding="2rem" borderRadius="0.3rem">
                    <SignupForm signUp/>
                </Box>
            </Paper>
            
        </Box>
    );
}