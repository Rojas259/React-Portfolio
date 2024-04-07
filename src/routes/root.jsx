import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'



export default function Root() {
    return (
        <>

            <Container maxWidth="md" >
                
                <Header />

                <Box sx={{ p: 2 }}>
                    <Outlet />
                </Box>

                {/* Import Footer */}
                <Footer />
            </Container>

        </>
    )
}