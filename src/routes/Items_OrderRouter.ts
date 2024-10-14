const { Router } = require('express')
const router = Router();
const itemsOrderController = require("../Controllers/Items_OrderController")

const { authenticate } = require("../config/auth")

console.log(' items-order em rotas!!!')

router.post('/', authenticate, itemsOrderController.create);
router.get('/', authenticate, itemsOrderController.index);
router.get('/:id', authenticate, itemsOrderController.show);
router.put('/:id', authenticate, itemsOrderController.update);
router.delete('/:id', authenticate, itemsOrderController.delete)


module.exports = router;

export { };