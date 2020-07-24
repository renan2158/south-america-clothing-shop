const express = require('express');

const routes = express.Router();

const ItemController = require('./controllers/ItemController');
const PaymentController = require('./controllers/PaymentController');
const CategoryController = require('./controllers/CategoryController');

routes.post('/client_secret', PaymentController.generateClientSecret);

routes.post('/items', ItemController.create);

//Do it with query
// routes.post('/items/:id', ItemController.unique);

routes.post('/gallery', ItemController.genderIndex);
routes.post('/search', CategoryController.searchIndex);

routes.post('/cart_item/:id', ItemController.unique);
routes.post('/category', CategoryController.categoryIndex);

module.exports = routes;