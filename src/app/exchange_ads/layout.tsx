import MoreVert from "@mui/icons-material/MoreVert";
import { Box, Chip, IconButton, Menu, MenuItem, Typography } from "@mui/material";

export default function Layout({children} :{children: React.ReactNode}) {
    return(
        <>
            <Box justifyContent={"space-between"} display = "flex" bgcolor={"secondary.main"} padding = ".6rem" alignItems={"center"} height = "3rem" marginTop = "2rem">
                <Typography variant = "h5">Exchange Ads</Typography>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </Box>
            {children}
        </>
    );
}