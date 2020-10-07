<script>
const getProductosURL = 'http://localhost:3000/api/Productos/';
var NewProducto = [];
var ButtonSelect='Sorteos';

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
    };

function obtenerSelect(Seleccion) {
    ButtonSelect=Seleccion;
    return ButtonSelect;
};
    
getDatos();
</script>
<main>      
    <div id="CajaSorteos">
    {#if 'Sorteos' == ButtonSelect && NewProducto.NameProducto == 'Sorteos'}    
    {#each NewProducto as idx}
        <ul class="BoxSorteo">
            <li><img alt="{idx.ImgProducto.filename}" src="http://localhost:3000/api/imagenProducto/?file={idx.ImgProducto.file}"/></li>
            <li>Nombre: {idx.NameProducto}</li>
         </ul>
    {/each}
    {/if}
</div>

</main>
<style>


    .BoxSorteo{
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


    #CajaSorteos{
	margin-top: 1px;
    justify-content: center;
    padding-top: 10px;
    text-align: center;
    background-color: #d6d6d6; 
	}
    img{
        
        float:right;
        width: 150px;
        height: 150px;
        border-radius: 50%;
	}

</style>