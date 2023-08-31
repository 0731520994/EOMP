const express = require('express')
const bodyParser = require('body-parser')
const {verifyToken} = require ('../middleware/AuthonticateUser')
const path =require('path')
const routes = express.Router()


//Export all objects

const {users, products, categories, orders} = require('../models')



//======user's router====
routes.get('/users', (req,res)=> {
    users.fetchUsers(req,res)
})


routes.get('/user/:id',(req, res) =>{
    users.fetchUser(req,res)
})

routes.post('/register', bodyParser.json(),
    (req,res) =>{
        users.register(req, res)
    })
    

routes.put('/user/: id', bodyParser.json(),
    (req,res) =>{
        users.updateUser(req, res)
    })

routes.patch('/user/: id', bodyParser.json(),
    (req,res) =>{
     users.updateUser(req, res)
    })
    

routes.delete('/user/: id', bodyParser.json(),
    (req,res) =>{
        users.deleteUser(req, res)
    })
    

//=====login=====

routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})




// =========CATEGORIES=============


routes.get('/categories', (req, res)=>{
    categories.fetchCategories(req, res)
})
routes.get('/category/:id',(req, res)=>{
    categories.fetchCategory(req, res)
})
routes.post('/AddNewCategory',(req, res)=>{
    categories.addCategory(req, res)
})

routes.patch('/category/:id', bodyParser.json(),(req, res)=>{
    categories.addCategory(req, res)
})
routes.put('/category/:id',bodyParser.json(),(req, res)=>{
    categories.updateCategory(req, res)
})
routes.delete('/category/:id', (req,res)=>{
    categories.deleteCategory(req, res)
})


// =========PRODUCTS ROUTES=============

routes.get('/products', (req, res) => {
    products.fetchProducts(req, res);
});
routes.get('/product/:id', (req, res) => {
    products.fetchProduct(req, res);
});
routes.post('/AddNewProduct', (req, res) => {
    products.addProduct(req, res);
});

routes.patch('/product/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res);
});
routes.put('/product/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res);
});
routes.delete('/product/:id', (req, res) => {
    products.deleteProduct(req, res);
});



// =========ORDERS=============


routes.get('/orders', (req, res)=>{
    orders.fetchOrders(req, res)
})
routes.get('/order/:id',(req, res)=>{
    orders.fetchOrder(req, res)
})
routes.post('/AddNewOrder',(req, res)=>{
    orders.addOrder(req, res)
})

routes.patch('/order/:id', bodyParser.json(),(req, res)=>{
    orders.updateOrder(req, res)
})
routes.put('/order/:id',bodyParser.json(),(req, res)=>{
    orders.updateOrder(req, res)
})
routes.delete('/order/:id', (req,res)=>{
    orders.deleteOrder(req, res)
})


// =========CATEGORIES ROUTES BY NAME=============


routes.get('/products/category/beauty', (req, res) => {
  categories.fetchProductsInBeautyCategory(req, res)
});


routes.get('/products/category/perfumes', (req, res) => {
    categories.fetchProductsInPerfumesCategory(req, res)

});

routes.get('/products/category/accessories', (req, res) => {
    categories.fetchProductsAccessoriesCategory(req, res)

});

module.exports = {
    express,
    routes
}
