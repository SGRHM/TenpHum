import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ExitToApp from '@material-ui/icons/ExitToApp';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Visibility from '@material-ui/icons/Visibility';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/home">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Painel Admin" />
    </ListItem>

    <ListItem button  component="a" href="/admin">
      <ListItemIcon>
        <Visibility />
      </ListItemIcon>
      <ListItemText primary="Monitoramento" />
    </ListItem>

    <ListItem button component="a" href="/admin/sensores">
      <ListItemIcon>
      <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Gerir Sensores" />
    </ListItem>


    <ListItem button  component="a" href="/admin/usuarios">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Gerir Usuarios" />
    </ListItem>

    <ListItem button  component="a" href="#">
      <ListItemIcon>
      <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Ver Historico" />
    </ListItem>
   
  </div>
);





export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);