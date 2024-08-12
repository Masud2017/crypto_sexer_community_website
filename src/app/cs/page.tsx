import { Box, Button, TextField, TextareaAutosize } from "@mui/material";

export default function CS() {
    return(
       <Box height={"100vh"} display={"flex"} gap = "1.5rem" justifyContent={"center"} flexDirection={"column"} padding = "5rem" alignItems={"center"}>
            <Box>
                
            </Box>
            <TextField
                type="text"
                label = "Subject"
                placeholder="Subject will be here .."
                color="neutral"
                fullWidth
            />
            <TextField
            type="textrea"
            label= "body"
            placeholder="Write down your quarries .."
            color="neutral"
            multiline
            minRows={10}
            maxRows={Infinity}
            fullWidth
            sx={{overflowY: "auto"}}
            />

            <Button variant = "contained" color="neutral">Submit</Button>
       </Box> 
    );
}