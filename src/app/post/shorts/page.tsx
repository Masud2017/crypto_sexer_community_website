import ShortBox from "@/_components/ShortBox";
import { Box } from "@mui/material";

export default function Shorts() {
    return (
        <Box marginTop={"5rem"}>
            <ShortBox title={"All time high bitcoin"} description="Some description" liked/>
        </Box>
    );
}