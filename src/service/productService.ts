
const ProductsSchema = require('../Schema/productSchema');

module.exports = {

    async create(user_id, name, sale, description,amont, ingredients) {
        
        await ProductsSchema.create({
            name,
            sale,
            description,
            amont,
            ingredients,
            usuarioId: user_id,
        });

        return { success: true, message: 'sucesso' };
    },

    async index(user_id: string) {
        const users = await ProductsSchema.find({usuarioId: user_id});

        return {
            success: true,
            message: ' recovered',
            result: users,

        };
    },

    async show(user_id, id) {
        const user = await ProductsSchema.find({_id: id, usuarioId: user_id});

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(user_id, id, name, sale, description, amont,ingredients) {
        await ProductsSchema.findOneAndUpdate({_id: id, usuarioId: user_id}, {
            name,
            sale,
            description,
            amont,
            ingredients,
        });

        return { success: true, message: 'sucesso' };
    },

    async delete(user_id, id) {
        console.log(id)
        await ProductsSchema.findOneAndDelete({_id: id, usuarioId: user_id});

        return {
            success: true,
            message: ' deleted'
        }
    },
};