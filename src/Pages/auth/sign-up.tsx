import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import imgLogin from '../../assets/Group25.svg'
import { Link, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Toaster, toast } from 'sonner'

interface typePropsForms {
    emailUser: string,
    passwordUser: string
}
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


const defaultTheme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();

    const firebaseConfig = {
        apiKey: "AIzaSyDUWzwFLlOw2jWx82uoOCbjF6tBDyjZR_A",
        authDomain: "finwise-project.firebaseapp.com",
        projectId: "finwise-project",
        storageBucket: "finwise-project.appspot.com",
        messagingSenderId: "100008535435",
        appId: "1:100008535435:web:f0e6ffef0c73fa4adbfb8e"
      };

    const app = initializeApp(firebaseConfig);

    const [emailUser, setEmailUser] = useState("");
    const [passwordUser, setPasswordUser] = useState("");

    const {register, handleSubmit } = useForm({
        defaultValues: {
            emailUser: '',
            passwordUser: ''
        }
    })
    
    function handleGetValuesInput(data: any) {
     console.log(data)
     setEmailUser(data.emailUser);
     setPasswordUser(data.passwordUser)
    }
    
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, emailUser, passwordUser)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        toast.success("Cadastro realizado com sucesso!")
        setTimeout(() => {
            // redireciona o usuario apos login success para a rota de login
            navigate('/sign-in');
        }, 3000);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
   
      });

    return (
        <ThemeProvider theme={defaultTheme}>

            <Grid container component="main" sx={{ height: '100vh', overflowY: "hidden" }}>
                <CssBaseline />
                <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
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
                        <Typography component="h1"
                            variant="h4"
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
                            }} >
                            Faça seu Cadastro
                        </Typography>
                        {/* //forms */}
                        <Box component="form" onSubmit={handleSubmit(handleGetValuesInput)} noValidate sx={{ mt: 1, boxShadow: ' #c1c1c1 1px 1px 3px 1px', padding: '30px', height: '385px', }}>
                            {/* //inputs */}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                placeholder='Digite seu e-mail.'
                                {...register("emailUser")}
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
                                {...register("passwordUser")}
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
                            {/* <Link to="/sign-in" style={{ textDecoration: 'none' }}> */}
                                <Toaster richColors />
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
                            {/* </Link> */}
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