const { Router } = require('express')
const router = Router();

const authController = require('../Controllers/authContrloller')

//VALIDACAO DO LOGIN \\
// import { store } from '../Validation/indexUsuario';
// import { loginValidation } from "../Validation/loginValidation";

//ROTA DO LOGIN
router.post('/register' ,authController.create);
router.post('/login'  ,authController.login);
module.exports = router ;

export{};