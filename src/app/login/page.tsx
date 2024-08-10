"use client"


import { Box, Button, Fab, InputAdornment, Paper, TextField } from "@mui/material";
import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';

import { getCookie, setCookie } from "cookies-next";
import { signIn } from "next-auth/react";
import { useState } from "react";


export default function LoginPage() {
    // setCookie("hyo","YO")
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    return (
        <Box display = "flex" justifyContent="center" alignItems="center" height="100vh" >
            <Paper elevation={2}>
                <Box height = "20rem" width = "30rem" display="flex" justifyContent="center" flexDirection="column" bgcolor="secondary.main" padding="2rem" borderRadius="0.3rem">
                    <form>
                        <TextField
                            required
                            label="Email"
                            name="email"
                            placeholder="Enter your email"
                            fullWidth={true}
                            onChange={(e)=>{
                                setEmail(e.target.value)}}
                            type="email"
                            
                            
                            />

                        <TextField
                            required
                            label="Password"
                            name="pass"
                            placeholder="Enter your password"
                            fullWidth={true}
                            type="password"
                            sx={{marginTop:"1.5rem"}}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                                ),
                            }}
                            onChange={(e)=>{
                                setPassword(e.target.value)}}
                            />

                        <Button  disabled={!email || !password}  onClick={() => signIn('credentials', {email, password, redirect: true, callbackUrl: '/'})} type = "submit" variant="contained" startIcon={<LoginIcon/>} color={"background"} fullWidth={true} sx={{marginTop:"2rem"}}>Submit</Button>
                        <Button  onClick={() => signIn('google')} variant="contained" startIcon={<GoogleIcon color="error"/>} color={"neutral"}  sx={{marginTop:"0.5rem"}}>Signup</Button>
                        {/* <Button  onClick={() => signIn('facebook')} variant="contained" startIcon={<GoogleIcon color="error"/>} color={"neutral"}  sx={{marginTop:"0.5rem"}}>Signup</Button> */}

                    </form>
                </Box>
            </Paper>
            
        </Box>
    );
}