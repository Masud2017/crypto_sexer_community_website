import { Skeleton } from "@mui/material";

export default function Loading() {
    return (
        <>
            <Skeleton variant="text" sx={{ fontSize: '1rem', backgroundColor:"white" }}/>

            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} sx={{backgroundColor:"white"}} />
            <Skeleton variant="rectangular" width={210} height={60} sx = {{backgroundColor:"white"}} />
            <Skeleton variant="rounded" width={210} height={60} sx = {{backgroundColor:"white"}} />
        </>
    );
}