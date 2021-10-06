const mongoose = require('../Database/db')



const tempHum = new mongoose.Schema({

	Temperature:{
		type: String,
		required: false
	},
	Humidity:{
		type: String,
		required: false,
		
	},
	
	Data:{
		type: String,
		required: false,
		
	},
	Hora:{
		type: String,
		required: false
	}

})




module.exports = mongoose.model('tempHum', tempHum)