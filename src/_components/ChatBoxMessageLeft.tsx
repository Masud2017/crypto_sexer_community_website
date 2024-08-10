import { Avatar, Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';

export default function ChatBoxMsgLeft() {
    return (
        <Stack direction={"row"} gap={"0.4rem"} alignItems={"center"}>

            <Box>
                <Typography align="start" variant="p">Forbidden_masud</Typography>
                <Paper sx={{height : "5rem",padding:"0.3rem", marginRight: "2rem"}} >
                    Hello world this is right message
                </Paper>
            </Box>
            <IconButton><ReplyIcon/></IconButton>

            {/* <Avatar alt = "Something went wrong" src = "#"/> */}
        </Stack>
    );
}