const Sensor = require('../models/cadastroSensor')


module.exports = {

	async Store(req, res){
		const {localizacao}= req.body;
		try{


			if(await Sensor.findOne({localizacao}))
				return res.send({"erro": "ja existe sensor nessa localizacao"})

			const sensor = await Sensor.create(req.body)
			return res.send(sensor)

		}
		catch(erro){

			return res.status(400).send({"erro":"falha ao registrar sensors"})
		}

		
	},


	async Index(req, res){

		try{
			const sensor = await Sensor.find(req.body)
			return res.send(sensor)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao listar sensors"})
		}


	},

	async IndexOne(req, res){

		try{
			const sensor = await Sensor.findOne({_id:req.params.id})
			return res.send(sensor)
		}

		catch(erro){
			return res.status(400).send({"erro":"falha ao detalhar sensors"})
		}


	},

	async UpdateOne(req, res){

		try{

			const sensor = await Sensor.updateOne({_id:req.params.id}, req.body);
			res.send({"message": "Sensor Actualizado com sucesso"})
		}
		catch(erro){
			return res.status(400).send({"erro":"falha ao actualizar sensors"})
		}
	},


	async DeleteOne(req, res){

		try{

			const sensor = await Sensor.deleteOne({_id:req.params.id})
			return res.send({"message": "Sensor deletado com sucesso"})
		}
		catch(erro){
			return res.status(400).send({"erro":"falha ao deletar sensors"})
		}
	}


}