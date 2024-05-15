import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Ícone de usuário
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import React from 'react';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Mounth(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>


        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Typography component="h1" variant="h5" style={{ fontFamily: 'Open Sans", sans-serif', fontSize: '36px', color: '#00C2FF', width: '100%', fontWeight: 'bold', marginBottom: '-10px' }} noWrap>
            FinWise
          </Typography>
          <Typography component="h1" variant="h5" style={{ fontFamily: 'Open Sans", sans-serif', fontSize: '18px', color: '#00C2FF', width: '100%', marginTop: '-2px', fontWeight: 'bold' }} noWrap>
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
        <Button variant="outlined" size="small" style={{ background: '#00C2FF', fontFamily: 'Open Sans", sans-serif', fontSize: '16px', color: '#000000', marginTop: '-2px', fontWeight: 'bold' }}>
          Sair
        </Button>
      </Toolbar>
    </React.Fragment>
  );
}
