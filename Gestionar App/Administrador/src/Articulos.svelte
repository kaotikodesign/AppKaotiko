<script>
    const getProductosURL = 'http://localhost:3000/api/Productos/';

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
                    NewProducto = obj.Articulo;
                    }
            )
          }

    function ObtenerEtiqueta() {
    
        radiovalor=document.Etiquetaform.EtiquetaArt.value;
        return radiovalor;
    };

   async function BorrarArticulo(id){
    var BorrarSeguro = window.confirm('Seguro que deseas borrarlo?');    //------------REVISAR
	if(BorrarSeguro==true){
        var url = `http://localhost:3000/borrar/?id=${id}`;
        await fetch(url);
        window.alert('Borrado')
        getDatos();//Refresca la pagina.
    }}

    async function OpenArticulo(idx){
        console.log(idx._id)
    }
    
    getDatos();

</script>
<main>
    <div id="PorEtiquetaArticulos">
		<navbar>
			<form name="Etiquetaform" id="idformart" on:click={()=>{ObtenerEtiqueta()}}>
                <input type="radio" name="EtiquetaArt" value="3D" checked /> 3D
                <input type="radio" name="EtiquetaArt" value="Madera"  /> Madera
                <input type="radio" name="EtiquetaArt" value="Pack"  /> Pack
				<input type="radio" name="EtiquetaArt" value="Tazas" /> Tazas
				<input type="radio" name="EtiquetaArt" value="Camisetas" /> Camisetas
                <input type="radio" name="EtiquetaArt" value="Cojines" /> Cojines
                <input type="radio" name="EtiquetaArt" value="Todos" /> Todos
			</form>
		</navbar >
    </div>
    
    <div id="Productos">
    {#if radiovalor!='Todos'}
    {#each NewProducto as idx}
    {#if radiovalor==idx.NameProducto}
    <ul class="BoxArticulo">
        <li>Nombre: {idx.NameProducto}</li>
        <li><img alt="{idx.ImgProducto.filename}" src="http://localhost:3000/api/imagenProducto/?file={idx.ImgProducto.file}"/></li>
        <li>Precio: {idx.PrecioProducto}</li>
        <li>stock: {idx.StockProducto}</li>
        <li>clicks: {idx.NumeroVisitas}</li>
        <li>descripcion: {idx.DescriProducto}</li>
        <li>Color: {idx.ColorProducto}</li>
        <li>Tamaños: {idx.SizeProducto}</li>
        <li>Visitas: {idx.NumeroVisitas}</li>
        <li>Envio: {idx.PrecioEnvioProducto}</li>
        <li><button style="background-color: #d24646 ;" on:click={()=>{BorrarArticulo(idx._id)}}> Borrar </button>
            <button> Editar </button>
        </li>
     </ul>
     {/if}
    {/each}
    {:else}
    {#each NewProducto as idx}
    <ul class="BoxArticulo" on:click="{()=>{OpenArticulo(idx)}}">
        <li>Nombre: {idx.NameProducto}</li>
        <li><img alt="{idx.ImgProducto.filename}" src="http://localhost:3000/api/imagenProducto/?file={idx.ImgProducto.file}"/></li>
        <li>Precio: {idx.PrecioProducto}</li>
        <li>stock: {idx.StockProducto}</li>
        <li>clicks: {idx.NumeroVisitas}</li>
        <li>descripcion: {idx.DescriProducto}</li>
        <li>Color: {idx.ColorProducto}</li>
        <li>Tamaños: {idx.SizeProducto}</li>
        <li>Visitas: {idx.NumeroVisitas}</li>
        <li>Envio: {idx.PrecioEnvioProducto}</li>
        <li><button on:click={()=>{BorrarArticulo(idx._id)}}> Borrar </button>
            <button> Editar </button>
        </li>
     </ul>
    {/each}
    {/if}
    
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

    #PorEtiquetaArticulos{
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