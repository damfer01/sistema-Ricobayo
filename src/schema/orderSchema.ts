import { Schema , model } from "mongoose";

const Order = new Schema({

    table_number : {type:String , required: true},

});

module.exports= model('order',Order) ; 