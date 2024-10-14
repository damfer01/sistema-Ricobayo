import { body } from "express-validator";

//Validador de cadastro de produtos 
export const productValidation = [

    body('name').escape().not().isEmpty().withMessage('producto obligatorio'),
    body('sale').escape().not().isEmpty().withMessage('precio obligatorio'),
    body('description').escape().not().isEmpty().withMessage('descripción requerida'),
    body('ingredients').escape().not().isEmpty().withMessage('ingredientes obligatorios')

];