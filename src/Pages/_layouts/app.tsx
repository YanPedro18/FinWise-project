import { useState } from 'react';
import {
  Box,
  Drawer as MuiDrawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  Divider,
  Button,
  AppBar as MuiAppBar,
  AppBarProps,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
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

export function AppLayout() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
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
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            px: [1] 
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h5" color="#00C2FF" sx={{ fontWeight: 'bold' }}>
              FinWise
            </Typography>
            <Typography variant="subtitle2" color="#00C2FF" sx={{ marginTop: -1 }}>
              financial
            </Typography>
          </Box>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon sx={{ color: 'black' }} />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
