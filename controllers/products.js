const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop/shop', {
      pageTitle: 'Shop Page',
      prods: products,
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productsCSS: true
    });
};

exports.getAddProduct = (req,res,next) => {
    const product = new Product(req.body.title)
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        productsCSS: true,
        activeAddProduct: true
    })
}

exports.postAddProduct =  (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');
  };
