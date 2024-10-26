const {create , index ,show , update , deleteP } = require('../service/productService');


module.exports = {
    async create(req, res) {
       
        try {
            const {
                name,
                sale,
                description,
                amount,
                ingredients,
                
            } = req.body;

            const response = await create( name, sale, description, amount ,   ingredients,);

            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false, })
        }
    },
    async index(req, res) {
    

        try {
            
            const response = await index();

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

            const response = await show();

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false,  })
        }
    },

    async update(req, res) {
        try {
            const {
                id,
            } = req.params;

            const {
                name,
                sale,
                description,
                amount,
                ingredients,
            } = req.body;

            const response = await update( id, name,  sale, description , amount,   ingredients, );

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

            const response = await deleteP(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, })
        }
    },
};