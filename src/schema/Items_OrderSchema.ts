import { model, Schema } from "mongoose";

const Items_OrderSchema = new Schema({

    Id_Produto: { type: String },
    Id_Pedido: { type: String },
});

module.exports = model('Items_Order', Items_OrderSchema);