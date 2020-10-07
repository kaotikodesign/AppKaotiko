<script>
    export var page;
const getProductosURL = 'http://localhost:3000/api/Productos/';

var NewProducto = [];

    function getDatos () {
        fetch(getProductosURL)
            .then(
                resp=>resp.json()
            )
            .then(
                obj=>{//De la base de datos
                    var UltimoArticulo = obj.Articulo.length-1;//Ultimo Articulo
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
<img alt="User" class="BtnFlotante" src="uploads/Botones/BotonAtras.png" on:click={()=>menu('Menu')}/>  
<div class="BoxGaleria">  
{#each NewProducto as idx}
    {#if 'Galeria' == idx.NameProducto}
<img alt="{idx.ImgProducto.filename}" src="http://localhost:3000/api/imagenProducto/?file={idx.ImgProducto.file}"/>
    {/if}
{/each}
<div></div>
</main>
<style>
    .BoxGaleria{
    padding: 5px;
	/*max-width: 300px;*/
   /* max-width: 100vw;  Ancho pantalla*/

	}

    .BtnFlotante{
        position:fixed;
        top:10px;
        right:10px;
        max-width:80px;
        max-height: 80px;
    }
   img{    
    max-width: 98vw;  /*Ancho pantalla*/
    /*height: 150px;*/
    align-items: center;
    display:flex;
	}


</style>