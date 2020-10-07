
const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017/APIdatos';



const DatosUsuario = {
    Nombreusu: 'Nombre de Usuario',
    Apellidosusu: 'Apellido de Usuario',
    Instausu : 'Instagram' ,
    Telfusu: 'Telefono de Usuario',
    Emailusu: 'Email de Usuario',
    Direccusu : 'Direccion y codigo postal',
    UrlUsuario:'',
}

const DatosArticulo = {
    EtiquetaProducto:'3D',
    NameProducto : 'Funko',
    PrecioProducto : '+40€',
    DescriProducto : 'Impreso en Pla, material BioDegradable y pintado a mano',
    ImgProducto :{},
    ColorProducto : 'Color o Atributo',
    SizeProducto : '10x10 cm',
    StockProducto : 'Bajo demanda',
    PrecioEnvioProducto : '6,50€',
    NumeroVisitas: '500 visitas',
}



/**
 * Variables para acceder al cliente, la base de datos y la colección
 */
var cli, db, colldatos, collproductos;

MongoClient.connect(mongoURL)
    .then(
        client => {
            console.log('*** Contectado a la base de datos.');
            cli = client;
            return db = client.db();
        }
    )
    .then(
        db => {
            db.dropCollection('datos');
            db.dropCollection('Productos');
            db.createCollection('Productos');
            db.createCollection('datos');
            console.log('*** Coleccións creadas.');
            colldatos = db.collection('datos');
            collproductos = db.collection('Productos');
            return Promise.all([
                colldatos.insertOne(DatosUsuario),
                collproductos.insertOne(DatosArticulo),
                //console.log(Articulo)
            ]);
        },
    )
    .then(
        (err,res) => {
            console.log('*** Datos insertados en la base de datos.');
            cli.close();
        }
    )
    .catch(
        err => {
            console.error(err);
            cli.close();
        }
    )