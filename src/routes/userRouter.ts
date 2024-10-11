const { Router } = require('express')
const router = Router();

const userRouter = require("../Controllers/userController");

// import { store } from '../Validation/indexUsuario';

// import { loginValidation } from "../Validation/loginValidation";

console.log('Usuario em rotas !!!')

router.post('/',  userRouter.create);
router.get('/', userRouter.index);
router.get('/:id', userRouter.show);
router.put('/:id', userRouter.update);
router.delete('/:id', userRouter.delete)


module.exports = router;

export { };