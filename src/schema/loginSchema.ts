import { Schema, model } from "mongoose"

const message = 'Campo obligatorio'

const loginSchema = new Schema({
    name: { type: String, required: message },
    password: { type: String, required: message },
});

module.exports = model('user', loginSchema)