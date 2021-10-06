import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import StarIcon from '@material-ui/icons/StarBorder';

import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
 
      borderBottom: `1px solid ${theme.palette.divider}`
    
  },

  title: {
    flexGrow: 0,
  },
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
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
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(4, 0, 4),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'primary' ? theme.palette.grey[100] : theme.palette.grey[500],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },

}));

const tiers = [
  {
    title: 'Áreas de Produção ZN1',
    price: 'T - 30°C',
    description: ['Sensor: Temperatura', 'Local: Sector 4', 'Status: Boa'],
    buttonText: 'Ver Detalhes',
    buttonVariant: 'contained',
  },
  {
    title: 'Áreas de Produção ZN32 ',
    price: 'H - 75%',
    description: ['Sensor: Humidade', 'Local: Sector 2', 'Status: Baixa'],
    buttonText: 'Ver Detalhes',
    buttonVariant: 'contained',
  },
  {
    title: 'Áreas de Produção ZN1',
    price: 'T - 27°C',
    description: ['Sensor: Temperatura', 'Local: Sector 4', 'Status: Boa'],
    buttonText: 'Ver Detalhes',
    buttonVariant: 'contained',
  },
  {
    title: 'Áreas de Produção ZN5',
    price: 'T - 40°C',
    description: ['Sensor: Temperatura', 'Local: Sector 4', 'Status: Alta'],
    buttonText: 'Ver Detalhes',
    buttonVariant: 'contained',
  },
  {
    title: 'Áreas de Produção ZN3 ',
    price: 'H - 15%',
    description: ['Sensor: Humidade', 'Local: Sector 2', 'Status: Boa'],
    buttonText: 'Ver Detalhes',
    buttonVariant: 'contained',
  },
  {
    title: 'Áreas de Produção ZN2',
    price: 'T - 27°C',
    description: ['Sensor: Temperatura', 'Local: Sector 4', 'Status: Boa'],
    buttonText: 'Ver Detalhes',
    buttonVariant: 'contained',
  }
];

export default function Dashboard() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <CssBaseline />
   
      <MenuAdmin title={'Monitoramento'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
     
        <Container maxWidth="lg" className={classes.container}>
          <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h5" variant="h5" align="center" color="textPrimary" gutterBottom>
            Áreas de Monitoramento 
            </Typography>
          
        </Container>
      
        
          <Grid container spacing={3}>
          <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 11 : 6} md={4}>
             
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center', component:"h16"}}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h5" variant="h5" color="textPrimary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h5" color="textSecondary">
                    
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
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