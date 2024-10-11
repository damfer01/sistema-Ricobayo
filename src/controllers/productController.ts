const Service = require('../Service/productService');

module.exports = {
    async create(req, res) {
        const user_id = req.user_id;
        try {
            const {
                name,
                description,
                sale,
                data,
                ingredients,
                
            } = req.body;

            const response = await Service.create(user_id, name, description, sale, data, ingredients,);

            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false, message: '[ERROR] ao criar produto' })
        }
    },
    async index(req, res) {
        const user_id = req.user_id;

        try {
            const response = await Service.index(user_id);

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

            const response = await Service.show(user_id,id);

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
                sale,
                ingredients,
                data,
            } = req.body;

            const response = await Service.update(user_id, id, name,  sale, ingredients,   data);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'não foi possível criar o produto' })
        }
    },

    async delete(req, res) {
        const user_id = req.user_id;
        try {
            const {
                id,
            } = req.params;

            const response = await Service.delete(user_id, id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'falha' })
        }
    },
};