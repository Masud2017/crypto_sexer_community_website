"use client"


import { Box, Button, Fab, InputAdornment, Paper, TextField } from "@mui/material";
import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';


export default function LoginPage() {
    return (
        <Box display = "flex" justifyContent="center" alignItems="center" height="100vh" >
            <Paper elevation={2}>
                <Box height = "20rem" width = "30rem" display="flex" justifyContent="center" flexDirection="column" bgcolor="secondary.main" padding="2rem" borderRadius="0.3rem">
                    <form action = "#" method = "POST">
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

                        <Button type = "submit" variant="contained" startIcon={<LoginIcon/>} color={"background"} fullWidth={true} sx={{marginTop:"2rem"}}>Submit</Button>
                    </form>
                </Box>
            </Paper>
            
        </Box>
    );
}