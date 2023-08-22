const { Users } = require('./Users')
const { Products } = require('./Products')
const {Orders} = require('./Orders')
const {Cart} = require('./cart')

module.exports = {
    users: new Users(),
    products: new Products(),
    orders: new Orders(),
    Cart: new Cart()
};