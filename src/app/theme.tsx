"use client"
import { ThemeProvider } from "@emotion/react";
import favicon from "./favicon.jpg";
import Image from "next/image";

import { AppBar, Box, Button, Chip, Container, CssBaseline, Divider, Fab, IconButton, Menu, PaletteMode, Paper, Stack, TextField, Toolbar, Typography, createTheme } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Link from "next/link";
import { useState } from "react";
import ChatBox from "@/_components/ChatBox";
import Badge from "@mui/material/Badge";
import { signOut, useSession } from "next-auth/react";
import { getCookie } from "cookies-next";
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth } from "../config/firebase_web";



export default function Theme({children}: {children:React.ReactNode}) {
    function getThemeToken(mode: PaletteMode) {
                
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
                        contrastText: "#121726"
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
    const session = useSession({
        required : true,
        onUnauthenticated() {
        //   redirect("/login")
        }
      });

      console.log("Value of email : ",getAuth().currentUser?.email);
      const se = getCookie("next-auth.session-token")
       console.log(se)    
    return (
            <ThemeProvider theme={theme}>
                        <html lang="en">
                            <body>
                              {/* {getAuth().currentUser?.emailVerified ? "hello":"not hello"} */}
                              
                            <Box height = "3rem" p="2">
                                <AppBar  position="static" sx={{backgroundColor: "secondary.main"}}>
                                    <Toolbar variant="dense" sx={{display: "flex",justifyContent: "space-between"}}>
                                        <Link href = "/">
                                            <div style = {{borderRadius:"50%",height:"30px","width":"30px",marginRight:"2rem"}}><Image objectFit="cover" height={30} width={30} src={favicon} alt="Something went wrong"/></div>
                                        </Link>
                                        <Box display="flex" flexDirection="row" gap=".5rem">
                                            <Link href= "/exchange_ads"><Chip sx={{borderRadius:50}} label = "Exchange Ad" variant = "outlined"/></Link>
                                            <Link href= "/post"><Chip label = "Posts" variant = "outlined"/></Link>
                                            <Link href= "/indicators"><Chip label = "Indicators" variant = "outlined"/></Link>
                                            <Link href= "/news"><Chip label = "News" variant = "outlined"/></Link>
                                            <Link href= "/cs"><Chip label = "CS" variant = "outlined"/></Link>
                                            <Link href= "/login"><Chip label = "Signin" variant = "outlined"/></Link>
                                            <Link href= "/signup"><Chip label = "Signup" variant = "outlined"/></Link>
                                            
                                            {se}
                                        </Box>
                                        {session?.data?.user?.email && <Link href = "#" onClick={()=>signOut()}><Button endIcon = {<LogoutIcon/>} variant="contained" color ="neutral">Logout</Button></Link>}
                                    </Toolbar>
                                </AppBar>
                            </Box>
                            <Container sx={{backgroundColor: "primary.main"}}>
                            </Container>
                            <AppRouterCacheProvider>
                                <CssBaseline/>
            {session?.data?.user?.email}

                                {children}
                            </AppRouterCacheProvider>
                            
                            <ChatBox showMsgBox = {showMsgBox} setShowMsgBox={setShowMsgBox}  setMsgFabShow={setMsgFabShow} />
                            
                            {msgFabShow && <Fab onClick={()=> {setShowMsgBox(true); setMsgFabShow(false)}} color ="tertiary" aria-label = "add" sx = {{position:"fixed",right:"3rem",bottom:"4rem"}}>
                                <Badge badgeContent = {10} color="error">
                                    <ChatIcon/>
                                </Badge>
                            </Fab>}
                            </body>
                        </html>
                </ThemeProvider>
           );
}