// Rota de produtor
const { Router } = require('express')
const router = Router();
const productController = require("../Controllers/productController")

const { authenticate } = require("../config/auth")

//Validar  o produtor
import { store } from '../validation/productStore';

//validar o produtor
import { productValidation } from '../validation/productValidation'
console.log(' produtos  em rotas!!!')

router.post('/', authenticate, productValidation, store, productController.create);
router.get('/', authenticate, productController.index);
router.get('/:id', authenticate, productController.show);
router.put('/:id', authenticate, productController.update);
router.delete('/:id', authenticate, productController.delete)

module.exports = router;

export { };