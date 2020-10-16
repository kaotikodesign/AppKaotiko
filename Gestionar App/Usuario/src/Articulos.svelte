<script>
    const getProductosURL = 'http://localhost:3000/api/Productos/';

    export var type;
    export var page;

    var radiovalor = '3D';
    var NewProducto = [];
    
function getDatos () {
    fetch(getProductosURL)
        .then(
            resp=>resp.json()
        )
        .then(
            obj=>{//De la base de datos
                var UltimoArticulo = obj.Articulo.length-1;//Ultimo Articulo
                //NewProducto = collProductos.find().skip(collProductos.count()-5).toArray();
                NewProducto = obj.Articulo;
                }
            )
    }

function menu(toPage) {
    page = toPage;
}
    getDatos();

</script>
<main>
    <div id="Productos" on:click=""><!--Boton para mostrar el articulo totalmente detallado-->
    <img alt="User" class="BtnFlotante" src="uploads/Botones/BotonAtras.png" on:click={()=>menu('App')}/>
    {#each NewProducto as idx}
    {#if idx.NameProducto === type}
    <ul class="BoxArticulo">        
        <!--li>Nombre: {idx.NameProducto}</li-->
        <li><img class="ImgArticulo" alt="{idx.ImgProducto.filename}" src="http://localhost:3000/api/imagenProducto/?file={idx.ImgProducto.file}"/></li>      
        <h3 class="Titule">Precio: </h3><li>{idx.PrecioProducto}</li>
        <h3 class="Titule">Color: </h3><li>{idx.ColorProducto}</li>
        <h3 class="Titule">Tamaños: </h3><li>{idx.SizeProducto}</li>
        <h3 class="Titule">Envio: </h3><li>{idx.PrecioEnvioProducto}</li>
        <h3 class="Titule">Descripción:</h3><li>{idx.DescriProducto}</li> 
        <li class="Titule">Visitas: </li><li>{idx.NumeroVisitas}</li><!--Número de clicks-->
    </ul>
    {/if}
    {/each}
   
</div>

</main>
<style>
    /* PAGINA WEB*/
    .Titule{
        font-style: sans-serif,bold;
        color:black;
        margin: auto;
    }
    

    .BoxArticulo{
    padding: 15px;
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 1px solid rgba(168, 168, 168, 0.8);
    background-color: #eeeeee; 
	max-width: 300px;
    max-width: 40vw;  /*Ancho pantalla*/
	list-style-type: none;
    margin: 5px;
	}
    .BtnFlotante{
        position:fixed;
        top:10px;
        right:10px;
        max-width:80px;
        max-height: 80px;
    }

    .ImgArticulo{
    float:inline-end;
    max-width: 90vw;
    max-height: 250px;
    max-width: 250px;
    align-items: center;
	}
    #Productos{
        display:flex;
    }

    /*img{        
    float:right;
    /*max-width: 90vw;
    max-height: 125px;
    max-width: 125px;
    align-items: center;
	}*/

    /* APP ----------------------------------------------------------------------------*/

    /*.BoxArticulo{
    display:flex;
    padding: 15px;
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 1px solid rgba(168, 168, 168, 0.8);
    background-color: #eeeeee; 
	max-width: 300px;
    max-width: 100vw;  /*Ancho pantalla
	list-style-type: none;
	}
    .BtnFlotante{
        position:fixed;
        top:10px;
        right:10px;
        max-width:80px;
        max-height: 80px;
    }

    img{        
    float:right;
    /*max-width: 90vw;
    max-height: 125px;
    max-width: 125px;
    align-items: center;
	}*/

</style>