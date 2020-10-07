<script>
import { each } from "svelte/internal";

    const getProductosURL = 'http://localhost:3000/api/Productos/';

    var radiovalor = 'Galeria';
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

   async function BorrarArticulo(id){
    var BorrarSeguro = window.confirm('Seguro que deseas borrarlo?');    //------------REVISAR
	if(BorrarSeguro==true){
        var url = `http://localhost:3000/borrar/?id=${id}`;
        await fetch(url);
        window.alert('Borrado')
        getDatos();//Refresca la pagina.
    }}
    
    getDatos();

</script>
<main>
    
    <div id="Productos">
    {#each NewProducto as idx}
    {#if 'Galeria'==idx.NameProducto}
    <ul class="BoxArticulo">
        <li>Tipo: {idx.NameProducto}</li>
        <li><img alt="{idx.ImgProducto.filename}" src="http://localhost:3000/api/imagenProducto/?file={idx.ImgProducto.file}"/></li>
        <li>Descripción: {idx.PrecioProducto}</li>
        <li><button style="background-color: #d24646 ;" on:click={()=>{BorrarArticulo(idx._id)}}> Borrar </button>
            <button> Editar </button>
        </li>
     </ul>
     {/if} 
     {/each}  
    </div>

</main>
<style>
    .BoxArticulo{
	display: inline-table;
	margin:10px;
    padding: 20px;
	padding-left: 35px;
    border-radius: 25px 25px 25px 25px;
    -moz-border-radius: 25px 25px 25px 25px;
    -webkit-border-radius: 25px 25px 25px 25px;
    border: 4px solid rgba(0, 0, 0, 0.8);
    background-color: #d6d6d6; 
	width: 300px;  
	list-style-type: none;
	}

    img{        
    float:right;
    max-width: 150px;
    height: 150px;
    border-radius: 50%;
	}

</style>