const { Users } = require('./Users')
const { Products } = require('./Products')

module.exports = {
    users: new Users(),
    products: new Products(),
};