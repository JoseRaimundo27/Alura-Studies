const { Router } = require('express');

const routes = Router();   


routes.post('/users', (req, res) => {}); 
routes.get('/users', (req, res) => {});
routes.get('/users/user_id', (req, res) => {});

routes.post('/login', (req, res) => {});    


routes.post('/products/:user_id', (req, res) => {});
routes.get('/products/:user_id', (req, res) => {}); 
routes.patch('/products/:user_id/:product_id', (req, res) => {});
routes.delete('/products/:user_id/:product_id', (req, res) => {});
routes.post('/products/:user_id/:product_id', (req, res) => {});

routes.get('/products', (req, res) => {});
routes.get ('/products/:product_id', (req, res) => {});  
routes.patch('/products/:product_id', (req, res) => {});

routes.post('/cart/:user_id', (req, res) => {}); 
routes.get('/cart/:user_id', (req, res) => {});
routes.get('/cart/:cart_id/:user_id', (req, res) => {});




module.exports = routes