 const { Router } = require('express')
 const router = Router();

 const authController = require('../Controllers/authContrloller')

 //VALIDACAO DO LOGIN \\
 import { store } from "../validation/userStore";
//  import { userValidation } from "../validation/userValidation";

// //ROTA DO LOGIN
 router.post('/register', authController.create);
 router.post('/login', authController.login);
 module.exports = router;

 export { };