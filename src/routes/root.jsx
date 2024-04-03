import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/themed";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


export default function Root() {
    return (
        <>
        <Container maxWidth = "md">
            <Header />
            <Box sx = {{p:2}}>
                <Outlet />
            </Box>
            <Footer />
        </Container>
        </>
    )
}