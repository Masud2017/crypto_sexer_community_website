import { Avatar, Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';

export default function ChatBoxMsgRight() {
    return (
        <Stack direction={"row"} gap={"0.4rem"} alignItems={"center"}>
            {/* <Avatar alt = "Something went wrong" src = "#"/> */}
            <IconButton><ReplyIcon/></IconButton>
            <Box>
                <Typography align={"end"}>Forbidden_masud</Typography>
                <Paper sx={{height : "5rem",padding:"0.3rem",marginLeft: "2rem"}} >
                    Hello world this is right message
                </Paper>
            </Box>
        </Stack>
    );
}