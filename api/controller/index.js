const express = require("express");
const { users, products } = require("../model");
const { verifyAToken } = require("../middleware/AuthenticateUser");
const routes = express.Router();
const bodyParser = require("body-parser");

routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});
routes.post("/login", bodyParser.json(), (req, res) => {
  users.login(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.registerUser(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.delete("/user/:id", bodyParser.json(), (req, res) => {
  users.removeUser(req, res);
});
// =======
//import all model's objects

routes.get("/products", (req, res) => {
  products.fetchProducts(req, res);
});
routes.get("/products/:prodID", (req, res) => {
  products.fetchProduct(req, res);
});
routes.post("/products", bodyParser.json(), (req, res) => {
  products.addProduct(req, res);
});
routes.patch("/products/:prodID", bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});
routes.delete("/products/:prodID", (req, res) => {
  products.removeProduct(req, res);
});

module.exports = {
  express,
  routes,
};
