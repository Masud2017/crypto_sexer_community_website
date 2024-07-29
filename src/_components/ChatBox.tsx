"use client"

import MinimizeIcon from '@mui/icons-material/Minimize';
import ImageIcon from '@mui/icons-material/Image';
import { Box, Collapse, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AttachFileIcon from '@mui/icons-material/AttachFile';

import ChatBoxMsgRight from './ChatBoxMessageRight';
import ChatBoxMsgLeft from './ChatBoxMessageLeft';

export default function ChatBox({showMsgBox, setShowMsgBox, setMsgFabShow}:{showMsgBox: boolean,
    setShowMsgBox : Dispatch<SetStateAction<boolean>>,
    setMsgFabShow: Dispatch<SetStateAction<boolean>>}) {
        const [showExpandedMsgOptions,setShowExpandedMsgOptions] = useState(false);
        const [showSingleMsgOption,setShowSingleMsgOption] = useState(true);


    return(
        <Collapse in = {showMsgBox} sx={{position:"fixed", right: "1rem", bottom:"4rem",zIndex:"10000"}} >
            <Paper sx={{minHeight : "30rem",width: "18rem",backgroundColor:"secondary.main",position:"relative",overflow:"none"}} elevation={15}>
                {/* Header */}
                <Paper elevation={6} sx={{backgroundColor:"secondary.main",padding:".2rem"}}>
                    <Box display= "flex" flexDirection="row" justifyContent={"space-between"} p= "0.5rem" alignItems={"start"}>
                        <Typography variant="h5" display="inline">Community chat</Typography>                                
                        <IconButton onClick={()=>{
                            setShowMsgBox(false);
                            setMsgFabShow(true);
                        }}><MinimizeIcon/></IconButton>
                    </Box>
                </Paper>

                {/* Body */}
                <Stack gap={"0.5rem"} sx={{backgroundColor:"secondary.main",height : "22.5rem", overflow: "auto", padding: "0.5rem"}}>
                        <ChatBoxMsgRight/>
                        <ChatBoxMsgLeft/>
                        <ChatBoxMsgRight/>
                        <ChatBoxMsgLeft/>
                        
                </Stack>

                {/* Chat input */}
                <Paper sx={{position:"absolute",bottom:"0px",width:"100%",backgroundColor: "secondary.main", display: "flex"}}>
                    <Stack direction={"row"} gap={"0.4rem"} alignItems={"center"} width={"100%"}>
                        <Stack direction={"row"} sx={{position:"relative"}} >
                            <Collapse in = {showExpandedMsgOptions} sx={{zIndex:"100000000",backgroundColor:"secondary.main", position:"absolute",bottom:"3.2rem",padding: ".2rem"}}>
                                <Stack direction={"column"}>
                                    <IconButton><ImageIcon/></IconButton>
                                    <IconButton><AttachFileIcon/></IconButton>
                                </Stack>
                            </Collapse>
                            <IconButton onClick={()=> {
                                setShowExpandedMsgOptions(!showExpandedMsgOptions)
                                setShowSingleMsgOption(!showSingleMsgOption)
                                }}><ExpandLessIcon/></IconButton>
                            {showSingleMsgOption && <IconButton><ImageIcon/></IconButton>}
                        </Stack>
                        <TextField
                            fullWidth = {true}
                            placeholder="Type your messages"
                            />
                        
                    </Stack>
                </Paper>

            </Paper>

        </Collapse>
    );
}