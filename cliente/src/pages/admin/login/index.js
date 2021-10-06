import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logoSistema from './logo.jpeg';
import api from '../../../services/api';
import {setNomeUsuario, login, setIdUsuario, setTipoUsuario } from '../../../services/auth';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        tongaatHulett
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');

  async function handleSubmit(){

    await api.post('/register/login',{email,senha})
    .then(res => {
        if(res.status===200){
            if(res.data.status===1){
                login(res.data.token);
                setIdUsuario(res.data.id_client);
                setNomeUsuario(res.data.user_name);
                setTipoUsuario(res.data.user_type);

                window.location.href= '/home'
            }else if(res.data.status===2){
                alert('Atenção: '+res.data.error);
            }
            
        }else{
            alert('Erro no servidor');
            
        }
    })
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <img style={{width:400,height:100}} src={logoSistema} alt="Logo sistema" />
        
        <Typography component="h1" variant="h5">
         SGRHM
        </Typography>
      
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Seu email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="senha"
            label="Sua senha"
            type="password"
            id="senha"
            autoComplete="current-password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

            <Grid container>
            <Grid item xs>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
            </Grid>
           
          </Grid>
       
          <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a Senha?
              </Link>
            </Grid>
           
          </Grid>
      
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}