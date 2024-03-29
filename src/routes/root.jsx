import { Outlet } from "react-router-dom";
import { Container, Box } from "@rneui/themed";
import Header from "../components/header";
import Footer from "../components/footer";


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