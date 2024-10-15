import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: { type: String, },
    sale: { type: Number, },
    description: { type: String },
    data:{type:Date , default: new Date()},
    ingredients: [{}]
});
module.exports = model("product", productSchema);