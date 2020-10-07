const MongoClient = require('mongodb').MongoClient;

const mongoURL = 'mongodb://localhost:27017/APIdatos';
const collectionDatos = 'Datos'
const collectionProductos ='Productos'

var cli, db, collectionDatos,collectionProductos;
MongoClient.connect(mongoURL)
    .then(
        client => {
            console.log('*** Contectado a la base de datos.');
            cli = client;
            return db = client.db();
        })
    .then(
        console.log(
        db.collectionDatos,
        db.collectionProductos)
    )
  

  
