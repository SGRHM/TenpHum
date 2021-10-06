import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import api from '../../../services/api'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  title: {
    flexGrow: 1,
  },
  
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

}));

export default function UsuariosCadastrar() {
  const classes = useStyles();

  const [nomesensor, setNome] = useState('');
  const [area, setArea] = useState('');
  const [tipo, setTipo] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [descricao, setDescricao] = useState('');
 


  async function handleSubmit(){

  	const data = {
  		nomeSensor: nomesensor,
  		areaProducao: area,
  		tipoSensor: tipo,
  		localizacao: localizacao,
      descricao: descricao
  	}
	  console.log(data)
  	const response = await api.post('/sensor/register', data)

  	if(response.status===200){
  		window.location.href= "/";
  	}

  	else{
  		console.log('ola1')
  	}
  }



  return (
    <div className={classes.root}>
      <CssBaseline />
   
      <MenuAdmin title={'Sensores'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <Grid container spacing={3}>

          	<Grid item sm={12}>
          		<Paper className={classes.paper}>

          			<h2>Cadastro de Sensor</h2>
	          		 <Grid container spacing={3}>
			          		<Grid item xs={12} sm={6}>
					          <TextField
					            required
					            id="nomesensor"
					            name="nomesensor"
					            label="Nome do Sensor"
					            fullWidth
					            autoComplete="nomesensor"
					            value={nomesensor}
					            onChange={e=> setNome(e.target.value)}
					          />
					        </Grid>
							<Grid item xs={12} sm={6}>
					          <TextField
					            required
					            id="area"
					            name="area"
					            label="Área de Produção   "
					            fullWidth
					            autoComplete="area"
					            value={area}
					            onChange={e=> setArea(e.target.value)}
					          />
					        </Grid>
							<Grid item xs={12} sm={4}>
					           <FormControl className={classes.formControl} fullWidth>
							        <InputLabel id="tipo">Tipo de Sensor</InputLabel>
							        <Select
							          labelId="tipo"
							          id="tipo"
							         value={tipo}
							        
					            		onChange={e=> setTipo(e.target.value)}
							        >
							          <MenuItem value={1}>Humidade</MenuItem>
							          <MenuItem value={2}>Temperatura</MenuItem>
									  
							        
							        </Select>
							    </FormControl>
					        </Grid>
					
							<Grid item xs={12} sm={8}>
					          <TextField
					            required
					            id="localizacao"
					            name="localizacao"
					            label="Localização"
					            fullWidth
					            autoComplete="localizacao"
					              value={localizacao}
					            onChange={e=> setLocalizacao(e.target.value)}
					          />
					        </Grid>
					        <Grid item xs={12} sm={12}>
					          <TextField
					            
					            id="descricao"
					            name="descricao"
					            label="Descrição"
					            fullWidth
					            autoComplete="descricao"
					              value={descricao}
					            onChange={e=> setDescricao(e.target.value)}
					          />
					        </Grid>

					         <Grid item xs={12} sm={3}>
					          	 <Button variant="contained" color="primary" onClick={handleSubmit}>
      								  Cadastrar
    							  </Button>
					        </Grid>
			        </Grid>
          		</Paper>
          	
		    </Grid>      
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}