import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function NoticeItem({title,description,date}: {title:string, description:string, date:string}) {
    return(
        <Accordion sx={{width: "100%",backgroundColor:"secondary.main"}}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            <Box>
                <Box display={"flex"} alignItems={"center"} gap = {"0.3rem"}>
                    <AccessTimeFilledIcon/><Typography variant="strong" component={"strong"}>
                        {date}
                    </Typography>
                </Box>
                <Typography variant="h6" component={"h6"}>
                    {title}
                </Typography>
            </Box>
        </AccordionSummary>

        <AccordionDetails>
            <Typography>
                {description}
            </Typography>
        </AccordionDetails>

        </Accordion>
    );
}