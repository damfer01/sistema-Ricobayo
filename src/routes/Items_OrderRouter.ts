const { Router  } = require('express')
const routerr = Router();
const itemsOrderRouter = require("../Controllers/Items_OrderController")

const {authenticate} = require("../config/auth")

     //Validar o login
// import { storeCaixa } from "../Validation/indexCaixa";

   //validar a caixa
// import { caixaValidation } from "../Validation/caixaValidation";

console.log(' items-order em rotas!!!')

routerr.post('/', authenticate, itemsOrderRouter.create);
routerr.get('/', authenticate, itemsOrderRouter.index);
routerr.get('/:id', authenticate, itemsOrderRouter.show);
routerr.put('/:id', authenticate, itemsOrderRouter.update);
routerr.delete('/:id', authenticate, itemsOrderRouter.delete)


module.exports = routerr;

export {};