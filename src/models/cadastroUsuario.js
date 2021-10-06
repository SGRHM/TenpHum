const mongoose = require('../database/db')
const express = require('express')
const bcrypt = require('bcryptjs')



const userSchema = new mongoose.Schema({


	apelido:{
		type: String,
		required: true
	},
	nome:{
		type:String,
		required:true
	},
	senha:{
		type: String,
		required: true
	},

	sexo:{
		type:String,
		required:true
	},
	numeroBI:{
		type:String,
		required:true
	},
	emailUsuario:{
		type: String,
		required: true,
		unique: true
	},
	
	tipoUsuario:{
		type: Number,
		required: true,
		default: 1
	}


}, {timestamps: true})



userSchema.pre('save',function(next){
    if(!this.isModified("senha")){
        return next();
    }
    this.senha = bcrypt.hashSync(this.senha,10);
    next();
});

userSchema.pre('findOneAndUpdate', function (next){
    var password = this.getUpdate().senha+'';
    if(password.length<55){
        this.getUpdate().senha = bcrypt.hashSync(password,10);
    }
    next();
});

userSchema.methods.isCorrectPassword = function (password, callback ){
    bcrypt.compare(password,this.senha,function(err,same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    })
}


module.exports = mongoose.model('User', userSchema)