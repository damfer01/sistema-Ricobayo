const Items_OrderService = require('../service/Items_OrderService');

module.exports = {
    async create(req, res) {
        const user_id = req.user_id;
        try {
            const {
                Id_Produto,  
                Id_Pedido,
                data,
                
                
            } = req.body;

            const response = await Items_OrderService.create(user_id, Id_Produto,  Id_Pedido, data, );

            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false, message: '[ERROR] ao criar ' })
        }
    },
    async index(req, res) {
        const user_id = req.user_id;

        try {
            const response = await Items_OrderService.index(user_id);

            return res.json(response);

        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'erro de buscar' })
        }

    },

    async show(req, res) {
        const user_id = req.user_id;
        
        try {
            const {
                id,
            } = req.params;

            const response = await Items_OrderService.show(user_id,id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'erro de buscar' })
        }
    },

    async update(req, res) {
        const user_id = req.user_id;
        try {
            const {
                id,
            } = req.params;

            const {
                Id_Produto,
                Id_Pedido,
                data,
            } = req.body;

            const response = await Items_OrderService.update(user_id, id, Id_Produto,  Id_Pedido,  data);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'não foi possível criar ' })
        }
    },

    async delete(req, res) {
        const user_id = req.user_id;
        try {
            const {
                id,
            } = req.params;

            const response = await Items_OrderService.delete(user_id, id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'falha' })
        }
    },
};