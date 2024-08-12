import { Box, Button, CircularProgress, InputAdornment, TextField, Typography } from "@mui/material";
import SignupUser from "@/app/signup/actions";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LoadingScreenForSignINUPForm from "./LoadingScreenForSignINUPForm";

const initialState = {
    message: '',
    isLoading : true
}

export default function SignupForm ({signUp = false,} : {signUp? : boolean}) {
    const [showSuccessBoard,setShowSuccessBoard] = useState(false);

    const [state,formActionSignup] = useFormState(SignupUser,initialState);

    useEffect(()=>{
        if (state?.message == "Verification") {
            setShowSuccessBoard(true);
        }
    },[state]);

    if (showSuccessBoard) {
        return (
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <TaskAltIcon sx={{height : "5rem", width : "5rem"}}/>
                <Typography marginTop = ".5rem" variant = "h6" align="center">A mail has been sent to you for verification. Please check your mail.</Typography>
                <Typography marginTop = "1rem">Thank for using our service.</Typography>
            </Box>
        )
    }

    if (signUp) {
        return <form action = {formActionSignup}>

            <LoadingScreenForSignINUPForm/>

        </form>
    } else {
        return <></>
    }

}