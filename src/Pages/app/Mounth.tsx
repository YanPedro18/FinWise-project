import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Mounth() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          backgroundColor: '#FFFFFF', // Cor de fundo branco para o cabeçalho
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          py: 2,
          px: 2,
          color: '#000000', // Texto preto para o cabeçalho
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" color="inherit">
            Seu cabeçalho fixo aqui.
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: '#00C2FF', 
          paddingTop: '64px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Sticky footer
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Pin a footer to the bottom of the viewport.'}
            {'The footer will move as the main element of the page grows.'}
          </Typography>
        </Container>
        <Box
          component="footer"
          sx={{
           
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: '#00C2FF',
          }}
        >
          <Container maxWidth="sm">
            <Typography >
              My sticky footer can be found here.
            </Typography>
            <Mounth />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
