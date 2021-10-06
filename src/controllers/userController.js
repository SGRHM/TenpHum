const User = require('../models/cadastroUsuario')
const jwt = require("jsonwebtoken");
//const { checkout } = require('../routes');
const secret = "mysecret";


module.exports= {

	async Store(req, res){
		const {emailUsuario} = req.body;

		try{

			if(await User.findOne({emailUsuario}))
				return res.send({"error": "usuario ja existe"})

			const user = await User.create(req.body)
			return res.status(200).send(user)
		}catch(erro){

			return res.status(500).send({"error": "falha ao cadastrar usuario"})
			console.log(erro);
		}


	},


	async Index(req, res){

		try{
			const user = await User.find(req.body);
			res.send(user)
		}catch(erro){
			return res.status(400).send({"error": "falha ao listar usuarios"})
		}
	},

	async IndexOne(req, res){
		try{
			const user = await User.findOne({_id:req.params.id});
			res.send(user)
		}catch(erro){
			return res.status(400).send({"error": "falha ao listar usuarios"})
		}
	},


	async DeleteOne(req, res){
		try{
			const user = await User.deleteOne({_id:req.params.id});
			res.send({"message": "usuario apagado com sucesso"})

		}catch(erro){
			return res.status(400).send({"error": "falha ao Deletar usuario"})
		}
	},

	async UpdateOne(req, res){
		try{
			const user = await User.updateOne({_id:req.params.id}, req.body);
			res.send({"message": "usuario Actualizado com sucesso"})

		}catch(erro){
			return res.status(400).send({"error": "falha ao Actualizar usuario"})
		}
	},

	async Login(req,res){
        const { email, senha } = req.body;
        User.findOne({emailUsuario: email}, function(err,user){
            if(err){
                console.log(err);
                res.status(200).json({erro: "Erro no servidor. Por favor, tente novamente"});
            }else if (!user){
                res.status(200).json({status:2, error: 'E-mail não encontrado no banco de dados'});
            }else{
                user.isCorrectPassword(senha, async function (err, same){
                    if(err){
                        res.status(200).json({error: "Erro no servidor. Por favor, tente novamente"});
                    }else if(!same){
                        res.status(200).json({status:2, error: "A senha não confere"});
                    }else{
                        const payload = { email };
                        const token = jwt.sign(payload, secret, {
                            expiresIn: '24h'
                        })
                        res.cookie('token', token, {httpOnly: true});
                        res.status(200).json({status:1, auth:true, token:token,id_client: user._id,user_name:user.nome,user_type:user.tipoUsuario});
                    }
                })
               
            }
        })
    },
      
    
    async checkToken(req,res){
        const token = req.body.token || req.query.token || req.cookies.token || req.headers['x-access-token'];
        if(!token){
            res.json({status:401,msg:'Não autorizado: Token inexistente!'});
        }else{
            jwt.verify(token, secret, function(err, decoded){
                if(err){
                    res.json({status:401,msg:'Não autorizado: Token inválido!'});
                }else{
                    res.json({status:200})
                }
            })
        }
    },
    async destroyToken(req,res){
        const token = req.headers.token;
        if(token){
            res.cookie('token',null,{httpOnly:true});
        }else{
            res.status(401).send("Logout não autorizado!")
        }
        res.send("Sessão finalizada com sucesso!");
    }


}