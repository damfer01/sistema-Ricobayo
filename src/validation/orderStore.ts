import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const store = async function (request: Request, response: Response, next) {
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        } next()
    } catch (error) {
        console.log(error)
    }

}