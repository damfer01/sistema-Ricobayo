
import { body } from "express-validator";

//Validador de cadastro de produtos 
export const orderValidation = [

    body('table_number').escape().not().isEmpty().withMessage('número de mesa requerido'),

];