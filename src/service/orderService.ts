const order = require('../schema/orderSchema');

module.exports = {

    async create(user_id, table_number, data,) {

        await order.create({
            table_number,
            data,
            usuarioId: user_id,
        });

        return { success: true, message: 'sucesso' };
    },

    async index(user_id: string) {
        const users = await order.find({ usuarioId: user_id });

        return {
            success: true,
            message: ' recovered',
            result: users,

        };
    },

    async show(user_id, id) {
        const user = await order.find({ _id: id, usuarioId: user_id });

        return {
            success: true,
            message: ' user recovered success',
            result: user,
        };
    },

    async update(user_id, id, table_number, data) {
        await order.findOneAndUpdate({ _id: id, usuarioId: user_id }, {
            table_number,
            data,
        });

        return { success: true, message: 'sucesso' };
    },

    async delete(user_id, id) {
        console.log(id)
        await order.findOneAndDelete({ _id: id, usuarioId: user_id });

        return {
            success: true,
            message: ' deleted'
        }
    },
};
