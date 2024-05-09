
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import imgLogin from '../../assets/Group25.svg'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to='/'>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {


    return (
        <ThemeProvider theme={defaultTheme}>

            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline /> 
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        </Avatar> */}
                        <Typography component="h1" variant="h5" style={{ fontSize: '36px', color: '#00C2FF', width: '60%', textAlign: 'center', paddingTop : '200px' }} >
                            Faça seu Cadastro
                        </Typography>
                        {/* //forms */}
                        <Box component="form" noValidate sx={{ mt: 1, boxShadow: ' #c1c1c1 1px 1px 3px 1px', padding: '60px' }}>
                            {/* //inputs */}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                placeholder='Digite seu e-mail.'
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{
                                    '&:focus': {
                                        borderColor: '#00C2FF', // Cor da borda alterada no foco
                                    },
                                }}
                            />
                            {/* //inputs */}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                placeholder='Digite sua senha.'
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                sx={{
                                    '&:focus': {
                                        borderColor: '#00C2FF', // Cor da borda alterada no foco
                                    },
                                }}
                            />
                            <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        mb: 2,
                                        borderRadius: '0.5rem',
                                        background: '#00C2FF',
                                        '&:hover': {
                                            backgroundColor: '#04A4D6', // Cor de fundo alterada no hover
                                        },
                                    }}
                                >
                                    Cadastrar
                                </Button>
                            </Link>
                            <Grid container>
                                <Grid item>
                                    <Link to='/sign-in'>
                                        {"Voce já possui uma conta ? Login"}
                                    </Link>
                                </Grid>
                            </Grid>

                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${imgLogin})`,

                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? '#00C2FF' : t.palette.grey[900],
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                    }}
                />
            </Grid>
        </ThemeProvider>
    );
}