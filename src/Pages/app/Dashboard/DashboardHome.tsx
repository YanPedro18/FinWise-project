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
import { ITransactionResponseProps } from '../../../interfaces/ITransactionsResponseProps';
import { addTransaction, getTransactions } from '../../../services/transactionsService';
import { Copyright } from '@mui/icons-material';

const defaultTheme = createTheme();

export default function DashboardHome() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [transactions, setTransactions] = React.useState<ITransactionResponseProps[]>([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions();
      setTransactions(data);

      const totalAmount = data.reduce((sum, transaction) =>
        transaction.type === 'entrada' ? sum + transaction.amount : sum - transaction.amount,
        0
      );
      setTotal(totalAmount);
    };

    fetchTransactions();
  }, []);

  async function handleAddTransaction(type: string, amount: number, description: string) {
    const newTransaction = {
      type,
      amount,
      description,
      date: new Date().toISOString(),
    };

    const transactionId = await addTransaction(newTransaction);

    if (transactionId) {
      setTransactions([...transactions, { id: transactionId, ...newTransaction }]);
      setTotal(type === 'entrada' ? total + amount : total - amount);
    }
  }

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Box sx={{ border: '1px solid #000000', padding: '8px', borderRadius: '4px' }}>Janeiro</Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ mr: 1 }}
                startIcon={<AddIcon />}
                onClick={() => handleAddTransaction('entrada', 100, 'Nova entrada')}
              >
                Nova Transação
              </Button>
              <Button variant="contained" color="success" startIcon={<DownloadIcon />}>
                Baixar Excel
              </Button>
            </Box>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={{ color: '#FFF', p: 2, display: 'flex', flexDirection: 'column', height: 120, backgroundColor: '#333333' }}>
                <Typography variant="h6" gutterBottom>
                  Entradas
                </Typography>
                <Typography variant="h4">$3,024.00</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={{ color: '#FFF', p: 2, display: 'flex', flexDirection: 'column', height: 120, backgroundColor: '#333333' }}>
                <Typography variant="h6" gutterBottom>
                  Saidas
                </Typography>
                <Typography variant="h4">$3,024.00</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper sx={{ color: '#FFF', p: 2, display: 'flex', flexDirection: 'column', height: 120, backgroundColor: '#333333' }}>
                <Typography variant="h6" gutterBottom>
                  Total
                </Typography>
                <Typography variant="h4">${total.toFixed(2)}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <TextField
                  label="Busque por Transações"
                  variant="outlined"
                  fullWidth
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
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
                    {filteredTransactions.map(transaction => (
                      <TableRow key={transaction.id}>
                        <TableCell>
                          {transaction.type === 'entrada' ? (
                            <ArrowDownwardIcon style={{ color: 'green' }} />
                          ) : (
                            <ArrowUpwardIcon style={{ color: 'red' }} />
                          )} {transaction.type}
                        </TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                        <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <IconButton>
                            <EditIcon />
                          </IconButton>
                          <IconButton>
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
