const { Router } = require('express');
const routes = Router();

const itemsOrder = require('./Items_OrderRouter');
const order = require('./orderRouter')
const productRouter = require('./productRouter')
const AuthRoutes = require('../Routes/authRouter');

const UserRoutes = require('../Routes/userRouter');



routes.use('/auth', AuthRoutes );
routes.use('/user', UserRoutes );
routes.use('/product', productRouter)
routes.use('/items', itemsOrder);
routes.use('/order', order);

module.exports = routes;
export {};