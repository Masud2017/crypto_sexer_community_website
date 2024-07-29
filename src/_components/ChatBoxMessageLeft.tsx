import { Avatar, Paper, Stack } from "@mui/material";

export default function ChatBoxMsgLeft() {
    return (
        <Stack direction={"row"} gap={"0.4rem"}>
            <Paper sx={{height : "5rem",padding:"0.3rem", marginRight: "2rem"}} >
                Hello world this is right message
            </Paper>
            {/* <Avatar alt = "Something went wrong" src = "#"/> */}
        </Stack>
    );
}