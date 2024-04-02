import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'


function Footer() {
    return (
        <Container>
            <Box>
                <Grid container>
                    <Grid>
                        <Link to="/AboutMe">AboutMe</Link>
                    </Grid>
                    <Grid>
                        <Link
                        style={{ fontFamily: 'roboto', fontWeight: 400, textDecoration: "none", color: "gray" }} to= "http://www.linkedin.com/in/miguel-rojas259/"
                        >LinkedIn</Link>
                    </Grid>
                    <Grid>
                        <Link style={{ fontFamily: 'roboto', fontWeight: 400, textDecoration: "none", color: "gray" }}
                        to="https://github.com/Rojas259">GitHub</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Footer