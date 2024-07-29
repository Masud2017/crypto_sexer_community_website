"use client"

import MinimizeIcon from '@mui/icons-material/Minimize';
import ImageIcon from '@mui/icons-material/Image';
import { Box, Collapse, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

export default function ChatBox({showMsgBox, setShowMsgBox, setMsgFabShow}:{showMsgBox: boolean,
     setShowMsgBox : Dispatch<SetStateAction<boolean>>,
    setMsgFabShow: Dispatch<SetStateAction<boolean>>}) {
    return(
        <Collapse in = {showMsgBox} sx={{position:"fixed", right: "1rem", bottom:"4rem",zIndex:"10000"}} >
            <Paper sx={{minHeight : "30rem",width: "18rem",backgroundColor:"secondary.main",position:"relative",overflow:"none"}} elevation={15}>
                {/* Header */}
                <Paper elevation={6} sx={{backgroundColor:"secondary.main",padding:".2rem"}}>
                    <Box display= "flex" flexDirection="row" justifyContent={"space-between"} p= "0.5rem" alignItems={"start"}>
                        <Typography display="inline">Community chat</Typography>                                
                        <IconButton onClick={()=>{
                            setShowMsgBox(false);
                            setMsgFabShow(true);
                        }}><MinimizeIcon/></IconButton>
                    </Box>
                </Paper>

                {/* Body */}
                <Paper sx={{backgroundColor:"secondary.main",height : "22.5rem", overflow: "auto"}}>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                        <h2>df</h2>
                </Paper>

                {/* Chat input */}
                <Paper sx={{position:"absolute",bottom:"0px",width:"100%",backgroundColor: "secondary.main", display: "flex"}}>
                    <Stack direction={"row"} gap={"0.4rem"} alignItems={"center"} width={"100%"}>
                        <Stack direction={"row"}>
                            <IconButton><ImageIcon/></IconButton>
                            <IconButton><ImageIcon/></IconButton>
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