"use client"

import { Box, Button, Fab, InputAdornment, Paper, TextField } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';
import SignupUser from "./actions";


export default function SignupPage() {
    return (
        <Box display = "flex" justifyContent="center" alignItems="center" height="100vh" >
            <Paper elevation={2}>
                <Box  width = "30rem" display="flex" justifyContent="center" flexDirection="column" bgcolor="secondary.main" padding="2rem" borderRadius="0.3rem">
                    <form action = {SignupUser}>
                    <TextField
                            required
                            id="outlined-required"
                            label="Full Name"
                            name="name"
                            placeholder="Enter your full name"
                            fullWidth={true}
                            type="text"
                            />

                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            name="email"
                            placeholder="Enter your email"
                            fullWidth={true}
                            type="email"
                            />

                        <TextField
                            required
                            id="outlined-required"
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
                            />
                        
                        <TextField
                            required
                            id="outlined-required"
                            label="Retype Password"
                            name="re-pass"
                            placeholder="Retype your password"
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
                            />

                        <Button type = "submit" variant="contained" startIcon={<LoginIcon/>} color={"inherit"} fullWidth={true} sx={{marginTop:"2rem"}}>Submit</Button>
                        <Button variant="contained" startIcon={<GoogleIcon color="error"/>} color={"neutral"}  sx={{marginTop:"0.5rem"}}>Signup</Button>
                    </form>
                </Box>
            </Paper>
            
        </Box>
    );
}