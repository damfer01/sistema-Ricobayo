
const userService = require('../service/userService');

module.exports = {
    async create(req, res) {
        try {
            const {
                
                nome,
                senha,

            } = req.body;

            const response = await userService.create( nome, senha);


            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false, message: 'failed to create user' })
        }
    },
    async index(req, res) {
        try {
            const response = await userService.index();

            return res.json(response);

        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'erro de buscar' })
        }

    },

    async show(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await userService.show(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'erro de buscar' })
        }
    },

    async update(req, res) {
        try {
            const {
                id,
            } = req.params;

            const {
                
                nome,
                senha,
            } = req.body;

            const response = await userService.update(id,  nome ,senha);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'não foi possível criar o usuário' })
        }
    },

    async delete(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await userService.delete(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, message: 'falha' })
        }
    },
};