import { Paper } from "@mui/material"
import { Box } from "@mui/material"
// import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import Typography from '@mui/material/Typography'


export default function Resume() {
    return (
        <Box>
            <Paper>
                <Box sx={{ p: 2 }}>
                    <Typography variant="h3">Professional Experience</Typography>
                    <Typography>Full stack web developer with a background in education and technical support. Currently enrolled in the Full Stack Web Development Bootcamp with Arizona State University. Proficient in designing and developing the front end and back end of websites and applications. Experience working in fast-paced development environments with tight deadlines. Agile learner, capable of dealing with ambiguity through collaboration and utilization of resources. </Typography>

                    <Typography variant="h4">Software Languages</Typography>
                    <Typography>JavaScript, Node, Express, React, SQL, MongoDB, CSS, HTML</Typography>
                </Box>

                <Box sx={{ p: 2 }}>
                <a href="/projects/BradburyWebResume.pdf" download>
                    <Button variant="contained" color="primary">
                        Download Resume PDF
                    </Button>
                </a>
                </Box>
            </Paper>
        </Box>
    )
}