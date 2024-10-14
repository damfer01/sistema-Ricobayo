
import { body } from "express-validator";

export const userValidation = [
     body('name' ).withMessage('nombre requerido'),
     body('password').escape().not().isEmpty().isLength( { min:8 , max: 14} ).withMessage('se requiere contraseña')
];