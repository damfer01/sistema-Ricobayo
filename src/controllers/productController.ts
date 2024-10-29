const Products = require('../service/productService');


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

            const response = await Products.create( name, sale, description, amount ,   ingredients,);

            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false, })
        }
    },
    async index(req, res) {
    

        try {
            
            const response = await Products.index();

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

            const response = await Products.show();

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

            const response = await Products.update( id, name,  sale, description , amount,   ingredients, );

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

            const response = await Products.delete(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, })
        }
    },
};