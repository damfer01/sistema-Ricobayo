import { model, Schema } from "mongoose";

const orderSchema= new Schema({
    id: {type: String},
    table_number : {type : String}
});

module.exports = model('order',orderSchema);