const ItensOrderControl = require ('../service/Items_OrderService');

module.exports = {
    async create(req, res) {
       
        try {
            const {
                Id_Produto,  
                Id_Pedido,   
            } = req.body;

            const response = await ItensOrderControl.create( Id_Produto,  Id_Pedido  );

            return res.json(response);
        } catch (error) {

            console.log(error);
            return res.json({ success: false, })
        }
    },
    async index(req, res) {
        

        try {
            const response = await ItensOrderControl.index();

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

            const response = await ItensOrderControl.show(id);

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
                Id_Produto,
                Id_Pedido,
                
            } = req.body;

            const response = await ItensOrderControl.update( id, Id_Produto,  Id_Pedido ) ;

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

            const response = await ItensOrderControl.delete(id);

            return res.json(response);
        } catch (error) {
            console.log(error);
            return res.json({ success: false, })
        }
    },
};