import { Avatar, Paper, Stack } from "@mui/material";

export default function ChatBoxMsgRight() {
    return (
        <Stack direction={"row"} gap={"0.4rem"}>
            {/* <Avatar alt = "Something went wrong" src = "#"/> */}
            <Paper sx={{height : "5rem",padding:"0.3rem",marginLeft: "2rem"}} >
                Hello world this is right message
            </Paper>
        </Stack>
    );
}