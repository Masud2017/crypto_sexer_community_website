"use client"
import { Box, Divider, Pagination, Paper, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import NewsCard from '@/_components/NewsCard';
import NewsBox from '@/_components/NewsBox';


export default function News() {
    let body = "A  quick brown fox jumps over the lazy dog. WordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct WritingWordCounter - Count Words & Correct Writing";
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <NewsBox margin='2rem 0'/>
            <Box padding = ".7rem" justifyContent={"center"} display = {"flex"} gap = {"0.7rem"} flexWrap={"wrap"}>
                <NewsCard path = {"/news/read_more"} image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                <NewsCard image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                <NewsCard image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                <NewsCard image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                <NewsCard image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                <NewsCard image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                <NewsCard image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                <NewsCard image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                <NewsCard image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                <NewsCard image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                <NewsCard image = "https://t4.ftcdn.net/jpg/03/15/61/35/360_F_315613525_tQOJljNhip1Y5EyToj4yYnMXTqOIgSoP.jpg" showImage = {true} title={"News header that contains image"} body={body} datetime={"20-08-2024 12:54 PM"}/>
                
            </Box>
            <Divider/>
            <Box marginBottom={"1rem"} marginTop={"3rem"} display={"flex"} justifyContent={"center"}>
                <Pagination showFirstButton showLastButton onChange={(e,value) => alert(value)} count = {1000} color={'tertiary'}/>
            </Box>
        </Box>
    );
}