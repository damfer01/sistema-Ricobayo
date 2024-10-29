const OrderContro = require ('../service/orderService');

module.exports = {
    async create(req, res) {

        try {
            const {
                
                table_number,

            } = req.body;

            const response = await OrderContro.create(table_number,);

            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false, })
        }
    },
    async index(req, res) {


        try {
            const response = await OrderContro.index();

            return res.json(response);

        } catch (error) {
            console.log(error);
            return res.json({ success: false, })
        }

    },

    async show(req, res) {


        try {
            const {
                id,
            } = req.params;

            const response = await OrderContro.show(id);

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

                table_number,

            } = req.body;

            const response = await OrderContro.update(id, table_number);

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

            const response = await OrderContro.delete(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, })
        }
    },
};