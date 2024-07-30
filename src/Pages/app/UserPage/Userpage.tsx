import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const defaultTheme = createTheme();

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(15),
  height: theme.spacing(15),
}));

export default function Userpage() {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <ProfileContainer sx={{ mt: 8, mb: 4 }}>
          <ProfileAvatar>
            <IconButton component="label">
              <CameraAltIcon />
              <input type="file" hidden />
            </IconButton>
          </ProfileAvatar>
          <Button variant="text" startIcon={<CameraAltIcon />}>
            Alterar foto de perfil
          </Button>
          <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
            Olá, SR. Teste <CheckCircleIcon color="primary" />
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Account synchronized in the cloud
          </Typography>
        </ProfileContainer>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
            borderRadius: 2,
            backgroundColor: 'white',
            width: '100%',
            maxWidth: 600,
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullName"
                  label="Nome completo"
                  name="fullName"
                  autoComplete="name"
                  defaultValue="Guilhermin Do Grau"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="dob"
                  label="Data de nascimento"
                  name="dob"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  defaultValue="2001-01-01"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  defaultValue="Teste@gmail.com"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Telefone"
                  name="phone"
                  autoComplete="tel"
                  defaultValue="(31) 9 0000-0000"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Salvar
            </Button>
          </Box>
        </Box>
        <IconButton
          sx={{
            position: 'fixed',
            bottom: 16,
            left: 16,
          }}
          onClick={handleDialogOpen}
        >
          <SettingsIcon fontSize="large" />
        </IconButton>
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>Configuração de senha</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Por favor, insira sua nova senha e a confirmação da senha.
            </DialogContentText>
            <TextField
              margin="dense"
              id="newPassword"
              label="Nova senha"
              type="password"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="confirmPassword"
              label="Confirmação"
              type="password"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>Cancelar</Button>
            <Button onClick={handleDialogClose} variant="contained" sx={{ backgroundColor: '#00C2FF' }}>Confirmar</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </ThemeProvider>
  );
}
