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
        <li><img alt="{idx.ImgProducto.filename}" src="http://localhost:3000/api/imagenProducto/?file={idx.ImgProducto.file}"/></li>
        <li>Descripción: {idx.DescriProducto}</li>        
        <li>Precio: {idx.PrecioProducto}</li>
        <li>Color: {idx.ColorProducto}</li>
        <li>Tamaños: {idx.SizeProducto}</li>
        <li>Envio: {idx.PrecioEnvioProducto}</li>
        <li>Visitas: {idx.NumeroVisitas}</li>
    </ul>
    {/if}
    {/each}
   
</div>

</main>
<style>
    .BoxArticulo{
    /*display:flex;*/
	/*display: inline-table;*/
    padding: 15px;
    border-radius: 5px 5px 5px 5px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 1px solid rgba(168, 168, 168, 0.8);
    background-color: #eeeeee; 
	max-width: 300px;
    max-width: 100vw;  /*Ancho pantalla*/
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
    /*max-width: 90vw;*/
    max-height: 150px;
    max-width: 150px;
    align-items: center;
	}

</style>