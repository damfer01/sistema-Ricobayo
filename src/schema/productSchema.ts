import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: { type: String, },
    sale: { type: Number, },
    description: { type: String },
    ingredients: [{}]
});
module.exports = model("product", productSchema);