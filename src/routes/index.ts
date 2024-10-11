const { Router } = require('express');
const routes = Router();


const productRouter = require('./productRouter')
const AuthRoutes = require('../Routes/authRouter');

const UserRoutes = require('../Routes/userRouter');



routes.use('/auth', AuthRoutes );
routes.use('/user', UserRoutes );
routes.use('/product', productRouter)

module.exports = routes;     