import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material';

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

export default Navigator;