const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  // res.send('products')
  Product.fetchAll().then(products => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products"
    });
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.productId;
  console.log(id);
  console.log(Product.findById(id))
  Product.findById(id)
  .then(product => {
    console.log(product)
    res.render("shop/product-detail", {
      pageTitle: product.title,
      product: product,
      path: "/products"
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop",
        path: "/"
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart"
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders"
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout"
  });
};
