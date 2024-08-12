import { Box, Button, CircularProgress, InputAdornment, TextField } from "@mui/material";
import { useFormStatus } from "react-dom"
import GoogleIcon from '@mui/icons-material/Google';

import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';

export default function () {
    const {pending} = useFormStatus();
    if (pending) {
        return (
            <Box width={"100%"} height = "100%" display = "flex" justifyContent={"center"} alignItems={"center"}>
                 <CircularProgress color="neutral" sx={{height : "5rem", width : "5rem"}}/>
            </Box>
        )
    } else {
        return <>
        <TextField
                    required
                    id="outlined-required"
                    label="Full Name"
                    name="name"
                    placeholder="Enter your full name"
                    fullWidth={true}
                    type="text"
                    sx={{marginBottom: "0.5rem"}}
    
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
    
                <Button  type = "submit" variant="contained" startIcon={<LoginIcon/>} color={"neutral"} fullWidth={true} sx={{marginTop:"2rem"}}>Submit</Button>
                <Box display={"flex"} marginTop = "0.5rem" gap = "0.3rem" justifyContent={"center"}>
                    <Button  variant="contained" startIcon={<GoogleIcon color="error"/>} color={"neutral"}  sx={{marginTop:"0.5rem"}}>Signup</Button>
                    <Button  variant="contained" startIcon={<GoogleIcon color="error"/>} color={"neutral"}  sx={{marginTop:"0.5rem"}}>Signup</Button>
                </Box>
        </>
    }
}