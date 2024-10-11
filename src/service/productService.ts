
const product = require('../schema/productSchema');

module.exports = {

    async create(user_id, name, sale, description,data, ingredients) {
        
        await product.create({
            name,
            sale,
            description,
            data,
            ingredients,
            usuarioId: user_id,
        });

        return { success: true, message: 'sucesso' };
    },

    async index(user_id: string) {
        const users = await product.find({usuarioId: user_id});

        return {
            success: true,
            message: ' recovered',
            result: users,

        };
    },

    async show(user_id, id) {
        const user = await product.find({_id: id, usuarioId: user_id});

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(user_id, id, name, sale, description, data,ingredients) {
        await product.findOneAndUpdate({_id: id, usuarioId: user_id}, {
            name,
            sale,
            description,
            data,
            ingredients,
        });

        return { success: true, message: 'sucesso' };
    },

    async delete(user_id, id) {
        console.log(id)
        await product.findOneAndDelete({_id: id, usuarioId: user_id});

        return {
            success: true,
            message: ' deleted'
        }
    },
};

