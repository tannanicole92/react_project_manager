const ProductController = require("../controllers/product.controller");

module.exports = app => {
  app.post("/api/products/new", ProductController.createProduct);
  app.put("/api/products/update/:id", ProductController.updateProduct);
  app.get("/api/products", ProductController.getAllProducts);
  app.get("/api/products/:id", ProductController.getProduct);
  app.delete("/api/products/delete/:id", ProductController.deleteProduct);
};
