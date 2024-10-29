import { Schema , model } from "mongoose";

const products = new Schema({

    name : {type:String , required: true},
    sale:{type:String , required: true},
    description:{type:String , required: true},
    amont:{type:String , required: true},
    ingredients:{type:String , required: true},

});

module.exports= model('product',products) ; 
  

