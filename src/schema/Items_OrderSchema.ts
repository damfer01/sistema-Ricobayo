import { Schema , model } from "mongoose";

const item_Order = new Schema({

    Id_Produto : {type:String , required: true},
    Id_Pedido:{type:String , required: true},

});

module.exports= model('items',item_Order) ; 


