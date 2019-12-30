const getDb = require('../util/db').getDb;

class Product {
  constructor(title, price, description, imgUrl){
    this.title = title, 
    this.price = price, 
    this.description = description, 
    this.imgUrl = imgUrl
  }

  save(){
    const db = getDb();
    return db.collection('products').insertOne(this)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  };

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        return products;
      })
      .catch(err => {
        console.log(err);
      });
  };

  static findById(id){
    const db = getDb();
    return db
      .collection('products')
      .find({_id:id})
      .next()
      .then(product => {
        return product
      })
      .catch(err => console.log('findbyid err',err))
  }
}

module.exports = Product;

// const fs = require('fs');
// const path = require('path');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );

// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

// module.exports = class Product {
//   constructor(title, imageUrl, description, price) {
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   currentId = 1

//   save() {
//     this.id = currentId.toString()
//     currentId++
//     getProductsFromFile(products => {
//       products.push(this);
//       fs.writeFile(p, JSON.stringify(products), err => {
//         console.log(err);
//       });
//     });
//   }

//   static fetchAll(cb) {
//     getProductsFromFile(cb);
//   }

//   static findById(id,cb){
//     getProductsFromFile(products => {
//       const product = products.find(prod => prod.id === id)
//       cb(product)
//     })
//   }
// };
