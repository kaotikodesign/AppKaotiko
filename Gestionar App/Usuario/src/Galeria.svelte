<script>
    export var page;

const getProductosURL = 'http://localhost:3000/api/Productos/';
var NewProducto = [];

var contador = 0;
var productoGaleria;

getDatos();

async function Pasafoto(direccion){
    do {
      contador = (contador+1) % NewProducto.length;
    }
    while (NewProducto[contador].NameProducto != 'Galeria')
    productoGaleria = null;
    productoGaleria = NewProducto[contador];
    console.log('Contador:',contador)
    //getDatos();//Refresca la pagina.
    }

function getDatos () {
  fetch(getProductosURL)
    .then(
      resp=>resp.json()
    )
    .then(
      obj=>{
      var UltimoArticulo = obj.Articulo.length-1;//Ultimo Articulo
      NewProducto = obj.Articulo;
      console.log('Artículos',NewProducto)
      Pasafoto()
      console.log('Producto galeria:',productoGaleria)
      }
    )
}    
          
function menu(toPage) {
  page = toPage;
};

</script>
<main>
<img alt="User" class="BtnFlotante" src="uploads/Botones/BotonAtras.png" on:click={()=>menu('Menu')}/>  


 <div class="ContainerGallery">
    {#if productoGaleria}
      <div class="Gallery">
        <img src={"http://localhost:3000/api/imagenProducto/?file="+productoGaleria.ImgProducto.file} alt={productoGaleria.ImgProducto.filename} style="width:100%">
      </div>
      {:else}
        <p>...</p>
    {/if}

    <input type="button" class="flechas" id="flechaizquierda" value="<" on:click={()=>{Pasafoto('mas')}}>
    <input type="button" class="flechas" id="flechaderecha" value=">" on:click={()=>{Pasafoto('menos')}}>
  </div>


</main>
<style>
.flechas{
  height: 10%;
  width: 40px;
  background-color:grey ;
  position:fixed;
  top:40%;
  opacity: 70%;
}
#flechaizquierda{left: 2%;}

#flechaderecha{right: 2%;}

.Gallery{
  padding: 5px;
	max-width: 98vw;


}

.BtnFlotante{
    position:fixed;
    top:10px;
    right:10px;
    max-width:80px;
    max-height: 80px;
}

img{    
  /*Ancho pantalla
  max-width: 89vw;*/
  size:cover;
  align-items: center;
  display:flex;
  max-height: 650px; 
}


</style>