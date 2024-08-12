"use client"
import { Box, Button, Divider, IconButton, Paper, TextField, TextareaAutosize } from "@mui/material";
import EmojiPicker from "emoji-picker-react";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { ReactNode, useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';

export default function NewsBox({margin}: {margin:string}) {
    const [openEmojiPicker, setEmojiPicker] = useState(false);
    return (
        <Paper sx={{width : "100%", backgroundColor : "secondary.main", padding : "0.5rem 1rem",margin : margin}} elevation={5}>
            <TextField type="text" name = "Post title" fullWidth placeholder="Post title"/>
            <TextareaAutosize style = {{width: "100%",marginTop:"0.5rem",overflowY: "auto"}} placeholder="What's on your mind ?" minRows={"15"} name = "post_body"/>

            <Divider/>
            <Box display={"flex"} justifyContent={"space-between"} padding = {"0.2rem 0"}>
                {/* <EmojiPicker /> */}
                <EmojiPicker open = {openEmojiPicker}/>
                <div>
                    <IconButton sx={{height : "2rem",width : "2rem"}} onClick={()=> setEmojiPicker(!openEmojiPicker)}>
                        <EmojiEmotionsIcon/>
                    </IconButton>
                    <IconButton>
                        <ImageIcon/>
                    </IconButton>
                </div>
    
                <Button variant="contained" color="neutral" endIcon = {<NewspaperIcon/>}>Post News</Button>
            </Box>
            <Divider/>
        </Paper>
    );
}