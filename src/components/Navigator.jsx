import * as React from 'react';
import AppBar from '@rneui/material/AppBar';
import Box from '@rneui/material/Box';
import Toolbar from '@rneui/material/Toolbar';
import Typography from '@rneui/material/Typography';
import Button from '@rneui/material/Button';
import { Link } from 'react-router-dom';
//images
import Container from "@rneui/material/Container";
import Menu from "@rneui/material-icons/Menu";
import IconButton from "@rneui/material/IconButton";
import MenuItem from "@rneui/material/MenuItem";
import { useTheme } from "@rneui/material/styles";

const pages = [ 'About', 'Protfolio', 'Contact', 'Resume' ];
const settings = [ 'Profile', 'Account', 'Dashboard', 'Logout' ];
function Navigator() {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);

    console.log(theme);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleClick}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Portfolio
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <MenuItem
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleClose}>
                            <Link to={`/${page.toLowerCase()}`}>{page}</Link>
                        </MenuItem>
                    ))}
                </MenuItem>
                <MenuItem
                    id="simple-menu"
                    anchorEl={anchorEl2}
                    open={Boolean(anchorEl2)}
                    onClose={handleClose2}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleClose2}>
                            <Link to={`/${setting.toLowerCase()}`}>{setting}</Link>
                        </MenuItem>
                    ))}
                </MenuItem>
            </Container>
        </Box>
    );
}

