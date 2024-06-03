import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { mainListItems, secondaryListItems } from './listItems';
import Deposits from './Deposits';
import Total from './Total';
import Saidas from './Saidas';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        FinWise
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

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
  }),
);

const defaultTheme = createTheme();

export default function DashboardHome() {
  const [open, setOpen] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [transactions, setTransactions] = React.useState([
    { type: 'Entrada', summary: 'Desenvolvimento de site', date: '28/04/2024', value: 'R$ 10,000.00' },
    { type: 'Saida', summary: 'Hamburger', date: '29/04/2024', value: 'R$ 80.00' },
  ]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleEdit = (index: number) => {
    // Lógica para editar a transação
    console.log('Editar transação:', index);
  };

  const handleDelete = (index: number) => {
    // Lógica para deletar a transação
    console.log('Deletar transação:', index);
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
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
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: [1] }}>
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
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box sx={{ border: '1px solid #000000', padding: '8px', borderRadius: '4px' }}>Janeiro
              </Box>
              <Box>
                <Button variant="contained" color="primary" sx={{ mr: 1 }} startIcon={<AddIcon />}>
                  Nova Transação
                </Button>
                <Button variant="contained" color="success" startIcon={<DownloadIcon />}>
                  Baixar Excel
                </Button>
              </Box>
            </Box>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    color: "white",
                    backgroundColor: '#454545',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    color: "white",
                    backgroundColor: '#454545',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                  }}
                >
                  <Saidas />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    color: "white",
                    backgroundColor: '#454545',
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 150,
                  }}
                >
                  <Total />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <TextField
                    label="Busque por Transações"
                    variant="outlined"
                    fullWidth
                    value={searchQuery}
                    onChange={handleSearchChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Table sx={{ mt: 2 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Resumo</TableCell>
                        <TableCell>Data</TableCell>
                        <TableCell>Valor</TableCell>
                        <TableCell>Ações</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredTransactions.map((transaction, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            {transaction.type === 'Entrada' ? (
                              <ArrowDownwardIcon sx={{ color: 'green' }} />
                            ) : (
                              <ArrowUpwardIcon sx={{ color: 'red' }} />
                            )}
                            {transaction.type}
                          </TableCell>
                          <TableCell>{transaction.summary}</TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.value}</TableCell>
                          <TableCell>
                            <IconButton onClick={() => handleEdit(index)}>
                              <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(index)}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
