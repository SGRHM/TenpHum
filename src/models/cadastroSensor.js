const mongoose = require('../database/db')

const sensorSchema = new mongoose.Schema({


	nomeSensor:{
		type: String,
		required: true
	},

	areaProducao:{
		type: String
	},

	tipoSensor:{
		type:String,
		required: true
	},
	localizacao:{
		type:String,
		required: true
	},
	descricao:{
		type:String,
		required: false
	}


}, {timestamps: true})


const Sensor = mongoose.model('sensor', sensorSchema)

module.exports = Sensor;