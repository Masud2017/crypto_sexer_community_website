"use client"
import { Box, Button, Divider, IconButton, Paper, TextField, TextareaAutosize } from "@mui/material";
import EmojiPicker from "emoji-picker-react";
import SendIcon from '@mui/icons-material/Send';
import { ReactNode, useState } from "react";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import {getAuth} from "../config/firebase_web";

export default function PostBox({margin}: {margin:string}) {
    const [openEmojiPicker, setEmojiPicker] = useState(false);
    const [title,setTitle] = useState("");
    const [body, setBody] = useState("");
    alert(getAuth().currentUser?.uid);
    let reqBody = {"title": title, "body": body, "uid": getAuth().currentUser?.uid};

    const submitPost= async ()=> {
        await fetch("http://localhost:3000/api/post",{method:"POST",body:JSON.stringify(reqBody)});
    }

    return (
        <Paper sx={{width : "50rem", backgroundColor : "secondary.main", padding : "0.5rem 1rem",margin : margin}} elevation={5}>
            <TextField type="text" name = "Post title" fullWidth placeholder="Post title" onChange={e => setTitle(e.target.value)}/>
            <TextareaAutosize onChange={e => setBody(e.target.value)} style = {{width: "100%",marginTop:"0.5rem",overflowY: "auto"}} placeholder="What's on your mind ?" minRows={"15"} name = "post_body"/>

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
    
                <Button onClick={submitPost} variant="contained" color="neutral" endIcon = {<SendIcon/>}>Post</Button>
            </Box>
            <Divider/>
        </Paper>
    );
}