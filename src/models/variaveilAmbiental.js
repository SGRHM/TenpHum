const mongoose = require('../database/db')

const ambienteSchema = new mongoose.Schema({


	sensor:{
		type: String,
		required: true
	},

	condicaoAmbiental:{
		type: String
	}


}, {timestamps: true})


const Ambiente = mongoose.model('ambiente', ambienteSchema)

module.exports = Ambiente;