import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Ícone de usuário
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react';
import { Box, CssBaseline, FormControl, GlobalStyles, InputLabel, MenuItem, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

const months = [
  { value: 'January', label: 'Janeiro' },
  { value: 'February', label: 'Fevereiro' },
  { value: 'March', label: 'Março' },
  { value: 'April', label: 'Abril' },
  { value: 'May', label: 'Maio' },
  { value: 'June', label: 'Junho' },
  { value: 'July', label: 'Julho' },
  { value: 'August', label: 'Agosto' },
  { value: 'September', label: 'Setembro' },
  { value: 'October', label: 'Outubro' },
  { value: 'November', label: 'Novembro' },
  { value: 'December', label: 'Dezembro' }
];

export default function Month(props: HeaderProps) {
  const { title } = props;
  const [selectedMonth, setSelectedMonth] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const month = event.target.value as string;
    setSelectedMonth(month);
    navigate('/');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#00C2FF', margin: 0, padding: 0 },
        }}
      />
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          backgroundColor: '#FFFFFF'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography component="h1" variant="h5" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '36px', color: '#00C2FF', width: '100%', fontWeight: 'bold', marginBottom: '-10px' }} noWrap>
            FinWise
          </Typography>
          <Typography component="h1" variant="h5" style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '18px', color: '#00C2FF', width: '100%', marginTop: '-2px', fontWeight: 'bold' }} noWrap>
            financial
          </Typography>
        </div>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
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
          }}>
          Sair
        </Button>
      </Toolbar>
      <Box
        sx={{
          flexDirection: 'column',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(90vh - 64px)', // Ajuste a altura conforme necessário, subtraindo a altura do cabeçalho
        }}
      >
        <Typography sx={{ color: '#fff', fontSize: '2rem', padding: '30px' }}>
          Selecione o mês de controle das finanças!
        </Typography>
        <Box
          sx={{
            width: 300,
            backgroundColor: '#FFFFFF',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="month-select-label">Escolha o mês</InputLabel>
            <Select
              labelId="month-select-label"
              id="month-select"
              value={selectedMonth}
              label="Escolha o mês"
              onChange={handleChange}
              displayEmpty
            >
              {months.map((month) => (
                <MenuItem key={month.value} value={month.value}>
                  {month.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </React.Fragment>
  );
}
