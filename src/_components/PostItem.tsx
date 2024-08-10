"use client"
import {Box, Button, Chip, Divider, IconButton, Menu, MenuItem, MenuList, Paper, Typography} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';

export default function PostItem ({title,body,likeCount,commentCount,date,userName} : {title:string,body:string,likeCount:string, commentCount: string,date: string, userName: string}) {
    if (likeCount == "")  {
        likeCount = "0";
    }
    if (commentCount == "") {
        commentCount = "0";
    }
    return (
        <Paper sx={{width : "50rem",backgroundColor:"secondary.main",padding: ".5rem 1rem"}}>
            <Box display = "flex" justifyContent={"space-between"}>
                <Box>
                    <Box alignItems={"center"} gap = "0.5rem" display={"flex"}><PersonIcon/><Typography display={"inline"} variant = "h6" component={"h6"}>{userName}</Typography></Box>
                    <Box alignItems={"center"} display = "flex" gap = "0.5rem"><AccessTimeFilledIcon/><Typography variant = "span">{date}</Typography></Box>
                </Box>
                <Box>
                    <IconButton>
                        <MoreHorizIcon/>
                    </IconButton>
                    {/* <Menu
                     id="basic-menu"
                     MenuListProps={{
                       'aria-labelledby': 'basic-button',
                     }}
                     open = {true} sx={{backgroundColor: "red", height:"10rem", width:"5rem"}}>
                            <MenuItem>Hello</MenuItem>
                            <MenuItem>Hello</MenuItem>
                            <MenuItem>Hello</MenuItem>
                            <MenuItem>Hello</MenuItem>
                            <MenuItem>Hello</MenuItem>

                    </Menu> */}
                </Box>
            </Box>

            <Box bgcolor={"secondary"} sx={{padding: ".2rem 1rem", height:"15rem"}}>
                <Typography variant="h6" marginTop={"1.5rem"} noWrap>{title}</Typography>
                <Divider/>
                <Typography marginTop={"1.5rem"}>{body}</Typography>
            </Box>
            <Divider/>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Typography>{likeCount} Likes</Typography>
                <Typography>{commentCount} Comments</Typography>
            </Box>
            <Divider/>
            <Box marginTop={"0.5rem"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                    <Box display={"flex"} gap = "1.5rem">
                        <Button color = {"neutral"} variant="contained" startIcon={<ThumbUpIcon/>}>Like</Button>
                        <Button color = {"neutral"} variant="contained" startIcon={<ThumbDownIcon/>}>UnLike</Button>
                    </Box>

                    <Chip color = "neutral" label = "Comment"/>
                </Box>
        </Paper>
    );
}