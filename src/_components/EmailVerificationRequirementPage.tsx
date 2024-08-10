import { Box, Typography } from "@mui/material";

export default function EmailVerificationRequirementPage() {
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100vh"} width={"100vw"}>
            <Box display = "flex" justifyContent={"center"}>
                <Typography variant="h3" align="center">Your email address need to be verified before accessing this account.</Typography>
            </Box>
        </Box>
    );
}