"use client"

import { Box, Card, CardHeader, Collapse, Divider, Fade, IconButton, Paper, Typography } from "@mui/material";
// import vid from "https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4";
import NextVideo from "next-video";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function ShortBox ({liked=false,title,description}: {liked:boolean,title:string,description:string}) {
    const [showCommentBox,setShowCommentBox] = useState(false);
    return (
        <Box display={"flex"}>
            <Box width={"30rem"} display={"flex"}>
                <Card elevation={"5"} sx={{height : "35rem", width : "25rem"}}>
                    <NextVideo height={"35rem"} src={"https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4"}/>
                </Card>
                {!showCommentBox ? <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap = "1rem">
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <IconButton >
                            {liked ? <FavoriteIcon color="error" sx={{height: "3rem",width : "3rem"}}/> :
                             <FavoriteBorderIcon  sx={{height: "3rem",width : "3rem"}}/>}
                        </IconButton>
                        34.34K
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <IconButton onClick={()=> setShowCommentBox(true)}>
                            <ChatBubbleIcon  sx={{height: "3rem",width : "3rem"}}/>
                        </IconButton>
                        34.34K
                    </Box>
                </Box>: <Box/>}
            </Box>
            {/* Comment box */}
            {/* <Collapse in = {showCommentBox} sx = {{width : "40rem",backgroundColor:"neutral.main", padding : "1rem"}} hidden={showCommentBox ? false: true}> */}
            <Fade timeout={1000} in = {showCommentBox} sx = {{width : "40rem",backgroundColor:"neutral.main", padding : "1rem"}} hidden={showCommentBox ? false: true}>
                <Box>
                    <Box height="2rem" color = "black" display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                        <Typography variant="h5">Comment Box</Typography>
                        <IconButton onClick={()=> setShowCommentBox(false)} color="primary">
                            <CloseIcon sx = {{height : "2rem", width : "2rem"}}/>
                        </IconButton>
                    </Box>
                    <Box marginTop = "2rem" color={"black"}>
                        <Typography variant="h5">{title}</Typography>
                        <Typography variant="span">{description}</Typography>
                        <Divider color = "grey"/>
                    </Box>
                    <Paper elevation={1} sx={{backgroundColor : "neutral.main",color :"primary.main",marginTop: "2rem",padding: "0.5rem"}}>
                        <Typography variant="h5">Comments</Typography>

                    </Paper>
                    
                </Box>
            </Fade>
            {/* </Collapse> */}
        </Box>
        
    );
}