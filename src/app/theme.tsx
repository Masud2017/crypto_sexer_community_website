"use client"
import { ThemeProvider } from "@emotion/react";
import M3Theme from "./M3.json";
import favicon from "./favicon.jpg";
import Image from "next/image";

import { AppBar, Box, Chip, Container, CssBaseline, Fab, IconButton, PaletteMode, Paper, Stack, TextField, Toolbar, Typography, createTheme } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Link from "next/link";
import { useState } from "react";
import ChatBox from "@/_components/Message";





export default function Theme({children}: {children:React.ReactNode}) {
    function getThemeToken(mode: PaletteMode) {
        const lightColors = M3Theme.schemes.light;
        const darkScheme = M3Theme.schemes.dark;
        
        return {
            palette : {
                mode: mode,
                ...(mode === "light") ? {
                    // primary: {
                    //     main: lightColors.primary,
                    //     contrastText: lightColors.onPrimary,
                    //   },
                    //   secondary: {
                    //     main: lightColors.secondary,
                    //     contrastText: lightColors.onSecondary,
                    //   },
                      
                    //   error: {
                    //     main: lightColors.error, // Customize error color
                    //     light: lightColors.onError
                    //   },
                    //   tertiary: {
                    //     main: lightColors.background,
                    //     contrastText: ""
                    //   },
                    //   neutral: {

                    //   },
                    //   background:{
                    //     default : "#121726"
                    //   },
                    //   text: {
                    //     primary: lightColors.onBackground,
                    //     secondary: lightColors.onSurface,
                    //   },
                    }
                   : {
                    primary: {
                        main: "#121726",
                        contrastText: "#FFFFFF",
                      },
                      secondary: {
                        main: "#272F40",
                        contrastText: "#FFFFFF",
                      },
                      background: {
                        default : "#121726"
                      },
                      
                      error: {
                        main: "#EF1427",
                      },
                      tertiary: {
                        main: "#F2CCB6",
                        contrastText:"#121726"
                      },
                      neutral : {
                        main: "#FFFFFF",
                        contrastTest: "#F2CCB6"
                      },
                      text: {
                        primary: "#ffffff",
                        secondary: "#ffffff",
                      },
                    },
            }
        }
    }

    

    const theme = createTheme(getThemeToken("dark"));
    const [showMsgBox, setShowMsgBox] = useState(false);
    const [msgFabShow, setMsgFabShow] = useState(true);

    return (<ThemeProvider theme={theme}>
                <html lang="en">
                    <body>
                    <Box height = "3rem" p="2">
                        <AppBar  position="static" sx={{backgroundColor: "secondary.main"}}>
                            <Toolbar variant="dense">
                                <Link href = "/">
                                    <div style = {{borderRadius:"50%",height:"30px","width":"30px",marginRight:"2rem"}}><Image objectFit="cover" height={30} width={30} src={favicon} alt="Something went wrong"/></div>
                                </Link>
                                <Box display="flex" flexDirection="row" gap=".5rem">
                                    <Link href= "#"><Chip sx={{borderRadius:50}} label = "Exchange Ad" variant = "outlined"/></Link>
                                    <Link href= "#"><Chip label = "Posts" variant = "outlined"/></Link>
                                    <Link href= "#"><Chip label = "Indicators" variant = "outlined"/></Link>
                                    <Link href= "#"><Chip label = "News" variant = "outlined"/></Link>
                                    <Link href= "#"><Chip label = "CS" variant = "outlined"/></Link>
                                    <Link href= "/login"><Chip label = "Signin/Signup" variant = "outlined"/></Link>
                                </Box>
                                
                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Container sx={{backgroundColor: theme.palette.primary}}>
                    </Container>
                    <AppRouterCacheProvider>
                        <CssBaseline/>
                        {children}
                    </AppRouterCacheProvider>
                    
                    <ChatBox showMsgBox = {showMsgBox} setShowMsgBox={setShowMsgBox}  setMsgFabShow={setMsgFabShow} />
                    
                    {msgFabShow && <Fab onClick={()=> {setShowMsgBox(true); setMsgFabShow(false)}} color ="secondary" aria-label = "add" sx = {{position:"fixed",right:"3rem",bottom:"4rem"}}>
                        <ChatIcon/>
                    </Fab>}
                    </body>
                </html>
           </ThemeProvider>);
}