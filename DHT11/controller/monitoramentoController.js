const Monitoramento = require('../Models/Monitoramento');

module.exports= {



    async Store(req, res){

		try{

			const monitoramento = await Monitoramento.create(req.body)
			return res.status(200).send(monitoramento)
		}catch(erro){

			return res.status(500).send({"error": "falha ao cadastrar"})
		}


	},

	async Index(req, res){

		try{
			const monitoramento = await Monitoramento.find(req.body).sort({'_id':-1}).limit(10);
			res.send(monitoramento)
            console.log("yes")
		}catch(erro){
			return res.status(400).send({"error": "falha ao verificar historico"})
		}
	},

}