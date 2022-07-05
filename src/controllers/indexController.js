const path = require("path");

const controller = {
  index: (req, res) => {
    res.render(path.join(__dirname, "../views/index.ejs"));
  },

  cart: (req, res) => {
    res.render(path.join(__dirname, "../views/cart.ejs"));
  },

  login: (req, res) => {
    res.render(path.join(__dirname, "../views/login.ejs"));
  },

};

module.exports = controller;
