import { Schema , model } from "mongoose";


const  Cadastro = new Schema({

   nome:{type: String },

   senha:{ type: String },
   
});

module.exports =  model('user', Cadastro);