const { Router } = require('express')
const router = Router();
const orderController = require("../Controllers/orderController")

const { authenticate } = require("../config/auth")

//Validar Pedido
import { store } from '../validation/orderStore';

//validador de Pedidos
import { orderValidation } from '../validation/orderValidation';

console.log(' items-order em rotas!!!')

router.post('/', authenticate, orderValidation, store, orderController.create);
router.get('/', authenticate, orderController.index);
router.get('/:id', authenticate, orderController.show);
router.put('/:id', authenticate, orderController.update);
router.delete('/:id', authenticate, orderController.delete)

module.exports = router;

export { };