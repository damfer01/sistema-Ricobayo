const orderService = require('../service/orderService');

module.exports = {
    async create(req, res) {
        const user_id = req.user_id;
        try {
            const {
                name,  
                order,
                data,
                
                
            } = req.body;

            const response = await orderService.create(user_id, name,  order, data, );

            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false, message: '[ERROR] ao criar ' })
        }
    },
    async index(req, res) {
        const user_id = req.user_id;

        try {
            const response = await orderService.index(user_id);

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

            const response = await orderService.show(user_id,id);

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
                name,
                order,
                data,
            } = req.body;

            const response = await orderService.update(user_id, id, name,  order,  data);

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

            const response = await orderService.delete(user_id, id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'falha' })
        }
    },
};