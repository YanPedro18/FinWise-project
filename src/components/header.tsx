import React, { useState } from 'react';
import { AppBar as MuiAppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

const drawerWidth = 240;

// Definir as propriedades esperadas para o AppBar estilizado
interface CustomAppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<CustomAppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

function Header() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <AppBar position="absolute" open={open} sx={{ backgroundColor: '#FFF', boxShadow: 'none' }}>
            <Toolbar sx={{ pr: '24px' }}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon sx={{ color: 'black' }} />
                </IconButton>
                <Typography component="h1" variant="h6" color="#000000" noWrap sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <IconButton>
                    <AccountCircleIcon />
                    <span style={{ fontSize: '0.8rem' }}>test@gmail.com</span>
                </IconButton>
                <Button
                    href='/sign-in'
                    style={{
                        background: '#00C2FF',
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '16px', color: '#000000',
                        marginTop: '-2px', fontWeight: 'bold'
                    }}
                >
                    Sair
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
