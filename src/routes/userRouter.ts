const { Router } = require('express')
const router = Router();

const userController = require("../Controllers/userController");

 import { store } from '../validation/userStore';

import {userValidation} from '../validation/userValidation'

console.log('Usuario em rotas !!!')

router.post('/', userValidation, store,   userController.create);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete)


module.exports = router;

export { };