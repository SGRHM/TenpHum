import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard'
import Sensores from './pages/admin/sensores'
import CadastroSensores from './pages/admin/sensores/sensorCadastro'
import EditarSensores from './pages/admin/sensores/sensorEditar'


import Usuarios from './pages/admin/usuarios'
import CadastroUsuarios from './pages/admin/usuarios/usuarioCadastrar';
import EditarUsuarios from './pages/admin/usuarios/usuarioEditar';
import Login from './pages/admin/login';


// IMPORTS CLIENTE

import Home from './pages/cliente/home'
import SensorDetails from './pages/cliente/sensores/sensoresDetails'


export default function Routes(){

	return(
			<BrowserRouter>
				<Switch>
					// ROTAS CLIENTE
					<Route path="/" exact component={Login}/>
					<Route path="/home" exact component={Home}/>
					<Route path="/sensores/:idSensor" exact component={SensorDetails}/>

					// ROTAS ADMIN
					<Route path="/admin" exact component={Dashboard}/>
					<Route path="/admin/login" exact component={Login}/>
					<Route path="/admin/sensores" exact component={Sensores}/>
					<Route path="/admin/sensores/cadastrar" exact component={CadastroSensores}/>
					<Route path="/admin/sensores/editar/:idSensor" exact component={EditarSensores}/>

					<Route path="/admin/usuarios" exact component={Usuarios}/>
					<Route path="/admin/usuarios/editar/:idUsuario" exact component={EditarUsuarios}/>
					<Route path="/admin/usuarios/cadastrar" exact component={CadastroUsuarios}/>
					
				</Switch>

			</BrowserRouter>

		)
}