const db = require("../database/models/index");
const Product = db.Product;
const Brand = db.Brand;
let brandController = {
  marca: async function (req, res) {
    await Product.findAll();
    await Brand.findAll().then(function (name, brand) {
      return res.render("marcas/addBrand.ejs", { name, brand });
    });
  },
  crearMarca: async function (req, res) {
    try {
      await Brand.create({
        name: req.body.nameBrand,
        picture_brand: req.file.filename,
      });
      res.redirect("/brand");
    } catch (error) {
      console.log(error);
    }
  },
  todasLasMarcas: async function (req, res) {
    try {
      let alllBrands = db.Brand.findAll();

      Promise.all([alllBrands]).then(([allBrands]) => {
        return res.render("marcas/allBrands.ejs", { allBrands });
      });
    } catch (error) {
      console.log(error);
    }
  },
  buscarPorMarca: async function (req, res) {
    try {
      let alllBrands = Brand.findAll({
        where: {
          id: req.params.brandId,
        },
      });
      let alllProducts = Product.findAll({
        where: {
          brand_Id: req.params.brandId,
        },
      });

      Promise.all([alllBrands, alllProducts]).then(
        ([allBrands, allProductos]) => {
          return res.render("productos/productos.ejs", {
            allBrands,
            allProductos,
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = brandController;
