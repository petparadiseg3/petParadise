const db = require("../database/models/index");

let productController = {

  crear: function (req, res) {
    db.Product.findAll()
      .then(function (name) {
        return res.render("productos/addProduct.ejs", {name})
      })
  },

  guardado: function (req, res) {
    db.Product.create({
      name: req.body.name,
      descriptions: req.body.descriptions,
      image: req.file.filename

    });
    res.redirect("/products")
  },

  listado: function (req, res) {
    db.Product.findAll()
    .then(function(allProductos){
      res.render("productos/productos.ejs",{allProductos})
    })
  },

  detalle: function (req, res) {

    db.Product.findByPk(req.params.id)
      .then(function (product) {
        res.render("productos/productDetail.ejs", {product})
      })
  },

  editar: function(req, res) {
    let pedidoProducto = db.Product.findByPk(req.params.id);

    let pedidoNombre = db.Product.findAll()


  }
        
}

module.exports = productController;


//!No borrar 
// const list = (req, res) => {
//   db.Product.findAll()
//     .then(allProductos => {   //promesa con .then
//       res.render("productos/productos.ejs",{allProductos})
//   })
// };

// const detail = async (req, res) => {  //promesa con async
 
//     const {id} = req.params;
//     const product =  await db.Product.findByPk(id)
//     res.render("productos/productDetail", {product})
// };

// module.exports = {
//   list, detail 
// }