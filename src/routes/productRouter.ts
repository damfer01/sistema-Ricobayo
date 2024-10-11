const { Router  } = require('express')
const routerr = Router();
const productRouter = require("../Controllers/productController")

const {authenticate} = require("../config/auth")

     //Validar o login
// import { storeCaixa } from "../Validation/indexCaixa";

   //validar a caixa
// import { caixaValidation } from "../Validation/caixaValidation";

console.log(' produtos  em rotas!!!')

routerr.post('/', authenticate, productRouter.create);
routerr.get('/', authenticate, productRouter.index);
routerr.get('/:id', authenticate, productRouter.show);
routerr.put('/:id', authenticate, productRouter.update);
routerr.delete('/:id', authenticate, productRouter.delete)


module.exports = routerr;

export {};