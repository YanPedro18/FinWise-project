import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
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
import { IconButton, Link } from '@mui/material';

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

const defaultTheme = createTheme();

export default function DashboardHome() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [transactions, setTransactions] = React.useState([
    { type: 'Entrada', summary: 'Desenvolvimento de site', date: '28/04/2024', value: 'R$ 10,000.00' },
    { type: 'Saida', summary: 'Hamburger', date: '29/04/2024', value: 'R$ 80.00' },
  ]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleEdit = (index: number) => {
    console.log('Editar transação:', index);
  };

  const handleDelete = (index: number) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box sx={{ border: '1px solid #000000', padding: '8px', borderRadius: '4px' }}>Janeiro</Box>
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
                  color: '#FFF',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 120,
                  backgroundColor: '#333333',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Entradas
                </Typography>
                <Typography variant="h4">$3,024.00</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  color: '#FFF',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 120,
                  backgroundColor: '#333333',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Saidas
                </Typography>
                <Typography variant="h4">$3,024.00</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  color: '#FFF',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 120,
                  backgroundColor: '#333333',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Total
                </Typography>
                <Typography variant="h4">$3,024.00</Typography>
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
                  sx={{ mb: 2 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Table size="small">
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
                            <ArrowDownwardIcon style={{ color: 'green' }} />
                          ) : (
                            <ArrowUpwardIcon style={{ color: 'red' }} />
                          )}{' '}
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
    </ThemeProvider>
  );
}
