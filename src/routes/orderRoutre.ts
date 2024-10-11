const { Router  } = require('express')
const routerr = Router();
const orderRouter = require("../Controllers/orderController")

const {authenticate} = require("../config/auth")

     //Validar o login
// import { storeCaixa } from "../Validation/indexCaixa";

   //validar a caixa
// import { caixaValidation } from "../Validation/caixaValidation";

console.log(' items-order em rotas!!!')

routerr.post('/', authenticate, orderRouter.create);
routerr.get('/', authenticate, orderRouter.index);
routerr.get('/:id', authenticate, orderRouter.show);
routerr.put('/:id', authenticate, orderRouter.update);
routerr.delete('/:id', authenticate, orderRouter.delete)


module.exports = routerr;

export {};