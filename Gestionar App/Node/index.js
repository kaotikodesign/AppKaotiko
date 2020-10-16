async function main() {
  const express = require('express');
  const cors = require('cors');
  const app = express();
  app.use(cors());

  const multer = require('multer');
  const mimeParser = multer( { dest: './uploads/',
  limits: {
      fileSize: 1000000,
  }, } );
  const { MongoClient, ObjectID } = require('mongodb');

  const fs = require('fs');

  const port = 3000;
  const mongoURL = 'mongodb://localhost:27017/APIdatos';;

  const collectionDatos = 'datos';
  const colecctionProductos = 'Productos';


  var mongoClient = await MongoClient.connect(mongoURL,{ useUnifiedTopology: true });
  var colldatos = await mongoClient.db().collection(collectionDatos);
  var collproductos = await mongoClient.db().collection(colecctionProductos);




// BASE DE DATOS DE USUARIOS----------------------------------------------------------------------
app.get('/api/datos/', (req, res) => {
    colldatos.find().toArray()
    .then(
      DatosUsuario=>{
        console.log('DatosUsuario:', DatosUsuario);//Son todos los Usuarios
        /*DatosUsuario[0].Nombreusu);*/
        var respuesta = {
          DatosUsuario
        };
        var json = JSON.stringify(respuesta);
        console.log('Enviando respuesta...');
        res.send(json);
      }
    )
  }
)

//BASE DE DATOS DE PRODUCTOS----------------------------------------------------------------------------

app.get('/api/Productos/',mimeParser.single('imgart'), (req, res) => {
    collproductos.find().toArray()
    .then(
      Articulo=>{
        console.log('Articulo:', Articulo);
        var respuesta = {
          Articulo,
        };
        imgart={};
        var json = JSON.stringify(respuesta);
        console.log('Enviando respuesta...');
        console.log(req.method, req.url, req.ip, json);
        res.send(json);

      }
    )
  }
)

//AGREGAR  DATOS ------------------------------------------------------------------------------------
app.post('/api/addDatos/',mimeParser.none(),(req,res) => {
  var nuevoNombre = req.body.Nombre;
  var nuevoApellido = req.body.Apellidos;
  var nuevoInsta = req.body.Instagram;
  var nuevoTelf = req.body.Telefono;
  var nuevoEmail = req.body.Email;
  var nuevoDirecc = req.body.Direcc;
  
  console.log(req.method, req.url, req.ip);
  console.log(`Nombre: ${nuevoNombre}`);//'nombre' = etiqueta (como si fuera ID)

  var cli, db, col;
  MongoClient.connect(mongoURL)
    .then(
      client => {
        console.log('*** Contectado a la base de datos.');
        cli = client;
        db = client.db();
        col = db.collection(collectionDatos);
        
        var nuevosDatos = {
          Nombreusu: nuevoNombre,
          Apellidosusu: nuevoApellido,
          Instausu: nuevoInsta,
          Telfusu: nuevoTelf,
          Emailusu: nuevoEmail,
          Direccusu: nuevoDirecc,
        };
        console.log('** Insertando datos...')
        //console.log(nuevosDatos)
        return col.insertOne(nuevosDatos);
      }
    ).then(
      response=>{
        console.log('** Dato insertado...');
        console.log('*** Cerrando conexión a base de datos.')
        res.send(200)
        cli.close();
      }
    )
})

//AGREGAR ARTICULOS -------------------------------------------------------------------------------

app.post('/api/addArticulo/',mimeParser.single('imgart'),async(req,res)  => {

  var nuevoarticulo = req.body.Nombreart;
  var nuevoprecio = req.body.Precioart;
  var nuevodescri = req.body.descriart;
  var imgart = {
    folder: req.file.destination,
    file: req.file.filename,
    filename: req.file.originalname,
    mime: req.file.mimetype,
}
  var nuevocolor = req.body.colorart;
  var nuevosize = req.body.sizeart;
  var nuevostock = req.body.stockart;
  var nuevoprenvio = req.body.envioart;
  var nuevavisita = req.body.visitart;

  console.log(req.method, req.url, req.ip);
  console.log(`NombreArt: ${nuevoarticulo}`);//'nombre' = etiqueta (como si fuera ID)

  var cli, db, col;
  MongoClient.connect(mongoURL)
    .then(
      async client => {
        console.log('*** Contectado a la base de datos.');
        cli = client;
        db = client.db();
        col = db.collection(colecctionProductos);
        
      var nuevoArticulo = {
          NameProducto : nuevoarticulo,
          PrecioProducto : nuevoprecio,
          DescriProducto : nuevodescri,
          ImgProducto : imgart,
          ColorProducto : nuevocolor,
          SizeProducto : nuevosize,
          StockProducto : nuevostock,
          PrecioEnvioProducto : nuevoprenvio,
          NumeroVisitas: nuevavisita,
          codImagen: imgart.file
        };
        
        console.log('** Insertando datos...')
        console.log(nuevoArticulo)
        var result = await collproductos.insertOne(nuevoArticulo);
        res.send(result);
      }
    ).then(
      response=>{
        console.log('** Dato insertado...');
        console.log('*** Cerrando conexión a base de datos.')
        res.send(200)
        cli.close();
      }
    )
})
//BORRAR ARTICULO-----------------------------------------------------
app.get('/borrar/',(req,res)=>{
	/**
	* Endpoint: http://localhost:3000/borrar/id=XXXXXX
	*/
	var id = req.query.id;
	collproductos.deleteOne({_id: ObjectID(id)}); 
	res.send('Ok')
})
//BORRAR USUARIO-----------------------------------------------------
app.get('/borrarUser/',(req,res)=>{
	var id = req.query.id;
	colldatos.deleteOne({_id: ObjectID(id)}); 
	res.send('Ok')
})

app.get('/api/imagenProducto/', async (req, res)=>{
  var fileName = req.query.file;
  var art = await collproductos.findOne({codImagen: fileName});
  res.setHeader('Content-disposition', 'attachment; filename=');
  res.setHeader('Content-type', art.ImgProducto.mime);
  var filestream = fs.createReadStream(`${art.ImgProducto.folder}${art.ImgProducto.file}`);
  filestream.pipe(res);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
}
main();
