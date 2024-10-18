import { create, index, show, update, deleteLogin } from '../service/userService'



module.exports = {
    async create(req, res) {
        try {
            const {
                name,
                password,

            } = req.body;

            const response = await create( name, password);


            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false,  })
        }
    },
    async index(req, res) {
        try {
            const response = await index();

            return res.json(response);

        } catch (error) {
            console.log(error);
            return res.json({ success: false,  })
        }

    },

    async show(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await show(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, })
        }
    },

    async update(req, res) {
        try {
            const {
                id,
            } = req.params;

            const {
                name,
                password,
            } = req.body;

            const response = await update(id,  name ,password);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, })
        }
    },

    async delete(req, res) {
        try {
            const {
                id,
            } = req.params;

            const response = await deleteLogin(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, })
        }
    },
};
export{};