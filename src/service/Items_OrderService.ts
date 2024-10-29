
const Items_Order_Schema = require('../Schema/Items_OrderSchema');

module.exports = {

    async create
          (user_id, Id_Produto, Id_Pedido,) {

        await Items_Order_Schema.create({
            Id_Produto,
            Id_Pedido,
            usuarioId: user_id,
        });

        return { success: true, message: 'sucesso' };
    },

    async index(user_id: string) {
        const users = await Items_Order_Schema.find({ usuarioId: user_id });

        return {
            success: true,
            message: ' recovered',
            result: users,

        };
    },

    async show(user_id, id) {
        const user = await Items_Order_Schema.find({ _id: id, usuarioId: user_id });

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(user_id, id, Id_Produto,
        Id_Pedido,) {
        await Items_Order_Schema.findOneAndUpdate({ _id: id, usuarioId: user_id }, {
            Id_Produto,
            Id_Pedido,


        });

        return { success: true, message: 'sucesso' };
    },

    async delete(user_id, id) {
        console.log(id)
        await Items_Order_Schema.findOneAndDelete({ _id: id, usuarioId: user_id });

        return {
            success: true,
            message: ' deleted'
        }
    },
};