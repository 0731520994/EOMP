
const Users = require('./Users')
const Orders = require('./Orders')
const Products = require('./Products')
const Categories = require('./Categories')


module.exports = {
   users: new Users(),
   orders: new Orders(),
   products: new Products(),
   categories: new Categories()

}