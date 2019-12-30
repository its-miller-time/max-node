
// //CODE FOR MONGODB WITHOUT MONGOOSE
const mongodb = require('mongodb');
const dotenv = require('dotenv');

const MongoClient = mongodb.MongoClient;
dotenv.config()

let db;

const mongoConnect = (cb) => {
    MongoClient.connect(process.env.uri,(err,client)=> {
        if(err) throw err
        console.log('db connected')
        _db = client.db()
        cb()
    })
        // .then(client => {
        //     console.log('connected');
        //     _db = client.db()
        //     cb()
        // })
        // .catch(err => {
        //     console.log(err)
        //     throw err
        // });
};

const getDb = () => {
    if(_db){
        return _db
    }
    throw 'No db found'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;