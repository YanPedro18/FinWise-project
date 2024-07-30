
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
                FinWise
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh', overflowY: "hidden" }}>
                <CssBaseline />

                <Grid item xs={12} sm={8} md={6} sx={{ height: '100%', }} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 3,
                            mx: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ bgcolor: 'secondary.main', marginTop: '10px' }}>
                        </Avatar>
                        <Typography
                            component="h1"
                            variant="h3"
                            sx={{
                                marginBottom: 3,
                                color: '#00C2FF',
                                width: '55%',
                                textAlign: 'center',
                                fontSize: {
                                    xs: '1.5rem', // Tamanho do título para telas extra pequenas (xs)
                                    sm: '1.8rem', // Tamanho do título para telas pequenas (sm)
                                    md: '1.8rem',   // Tamanho do título para telas médias (md)
                                    lg: '2.2rem', // Tamanho do título para telas grandes (lg)
                                    xl: '3rem',   // Tamanho do título para telas extra grandes (xl)
                                },
                            }}
                        >
                            Bem-vindo, Faça seu Login
                        </Typography>
                        {/* //forms */}
                        <Box component="form" noValidate sx={{ mt: 1, boxShadow: ' #c1c1c1 1px 1px 3px 1px', padding: '30px', height: '385px', }}>
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
                            <Link to="/mounth" style={{ textDecoration: 'none' }}>
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
                                    Entrar
                                </Button>
                            </Link>

                            <Grid container>
                                <Grid item xs >
                                    <Link to='/'>
                                        Esqueceu sua senha?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to='/sign-up'>
                                        {"Você não tem uma conta? Sign Up"}
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
                    md={6}
                    sx={{

                        backgroundImage: `url(${imgLogin})`,

                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? '#00C2FF' : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            </Grid>
        </ThemeProvider>
    );
}