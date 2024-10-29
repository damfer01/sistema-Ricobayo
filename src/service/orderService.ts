
const OrderSchema = require('../Schema/orderSchema');

module.exports = {

    async create(user_id ,table_number  ) {
        
        await OrderSchema.create({
            
            table_number,
            usuarioId: user_id,
        });

        return { success: true, message: 'sucesso' };
    },

    async index(user_id: string) {
        const users = await OrderSchema.find({usuarioId: user_id});

        return {
            success: true,
            message: ' recovered',
            result: users,

        };
    },

    async show(user_id, id) {
        const user = await OrderSchema.find({_id: id, usuarioId: user_id});

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(user_id, id, table_number ) {
        await OrderSchema.findOneAndUpdate({_id: id, usuarioId: user_id}, {
            
            table_number,
            
        });

        return { success: true, message: 'sucesso' };
    },

    async delete(user_id, id) {
        console.log(id)
        await OrderSchema.findOneAndDelete({_id: id, usuarioId: user_id});

        return {
            success: true,
            message: ' deleted'
        }
    },
};