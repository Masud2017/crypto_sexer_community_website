import PostBox from "@/_components/PostBox";
import PostItem from "@/_components/PostItem";
import { Box, Chip } from "@mui/material";

export default function Post() {
    return (
        
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} height={"100vh"}>
            <PostBox margin = {"2rem 0"}/>
            
            <PostItem title= {"Post title"} body = {"This is a post title"} likeCount="" commentCount="" userName="Masud2024" date = "24-08-2024 12:05 pm"/>
            
        </Box>
    );
}