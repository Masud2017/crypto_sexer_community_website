import NoticeBox from "@/_components/NoticeBox";
import NoticeItem from "@/_components/NoticeItem";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";



export default function Notices() {
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} height={"100vh"}>
            <NoticeBox margin = {"2rem 0"}/>
            
            <Box  width={"40rem"} display={"flex"} gap= {"0.5rem"} flexDirection={"column"} alignItems={"center"}>
                
                <NoticeItem title ={"Notice title"} description="Notice description ...." date = "20-08-2024 12:25 PM"/>   
            </Box>
            
        </Box>
    );
}