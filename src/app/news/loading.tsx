import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
    return(
        <Box height={"100vh"} width={"100vw"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <CircularProgress color={"neutral"}/>
        </Box>
    );
}