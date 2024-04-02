import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/themed";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Root() {
    return (
        <Container>
            <Header />
            <Box>
                <Outlet />
            </Box>
            <Footer />
        </Container>
    );
}