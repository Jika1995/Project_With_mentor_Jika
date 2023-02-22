import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

//mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ea80fc',
    },
  },
});

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useAuth(); //вытаскивает контекст

  const navigate = useNavigate();

  const style={
    backgroundImage: `url('https://images.unsplash.com/photo-1609042191775-746c6eeae7bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80')`,
    width: '100%',
    height: '100%'
  }

  return (
    <div style={style}>

      {error ? (
        <h3>{error}</h3>
      ) : (
        ''
      )}

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            padding: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="old-username"
                  onChange={e => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="old-password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => login(username, password)}
              style={{marginBottom: '3%'}}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  )
}

export default LoginPage