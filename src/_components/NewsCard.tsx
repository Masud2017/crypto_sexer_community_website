import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Link from "next/link";


export default function NewsCard({title,datetime,body,image,showImage = false,path}:{title:string,datetime:string,body:string, image? : string | null,showImage? : boolean,path : string | null}) {
    let turncatedString:string = "";
    if (body.length > 150) {
        turncatedString = body.substring(0,149);
        turncatedString+= " ...";
    } else {
        turncatedString = body;
    }

    return(
        <Card sx={{width : "20rem",backgroundColor:"secondary.main"}} elevation={2}>
            <CardHeader title ={title} subheader={<Box display={"flex"} gap ="0.3rem" alignItems={"center"}><AccessTimeFilledIcon/><Typography>{datetime}</Typography></Box>} action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }/>
            {showImage ? <CardMedia sx={{height: "10rem"}} image = {image ?? ""} src={image ?? ""}/> : <></>}
            <CardContent>
                <Typography>
                    {turncatedString}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href = {path ?? ""}><Button variant="contained" color="neutral">Read more</Button></Link>
            </CardActions>
        </Card>
    );
}