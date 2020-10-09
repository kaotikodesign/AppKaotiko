<script>
    const getProductosURL = 'http://localhost:3000/api/Productos/';
    const addArticuloURL = 'http://localhost:3000/api/addArticulo/';
   // var NuevoArticulo={};
    var ArtNameHTML,PrecioHTML,DescriHTML,ColorHTML,SizeHTML,StockHTML,EnvioHTML,TituloHTML;
    var ImgHTML=[]
    var imgart = {};

function VaciarImput(){
    ArtNameHTML ='';
    PrecioHTML ='';
    DescriHTML ='';
    ColorHTML ='';
    SizeHTML ='';
    StockHTML = '';
    EnvioHTML = '';
}

function enviar () {
        var url = 'http://localhost:3000/api/addArticulo/'
		var data = new FormData();
		data.append('Nombreart',ArtNameHTML);
		data.append('Precioart',PrecioHTML);
		data.append('descriart',DescriHTML);
        data.append('imgart',ImgHTML[0]);
        data.append('colorart',ColorHTML);
		data.append('sizeart',SizeHTML);
        data.append('stockart',StockHTML);
        data.append('envioart',EnvioHTML);
        data.append('Tituloart',TituloHTML);
        VaciarImput();
		var requestOptions = {
			method: 'POST',
			body: data,
        };
		fetch(url,requestOptions)
			.then(res=>console.log('Articulo registrado!'))
			.catch(res=>console.error(res))
        ;}
        
    
</script>

<main>
    <div id="Secciones">
		<section id="Muestra">
		<h2>Regitra Articulo</h2>
        <label>
            Nombre:
            <select name="Elemento" bind:value={ArtNameHTML}>
                <option>3D</option>
                <option>Pack</option>
                <option>Madera</option>
                <option>Tazas</option>
                <option>Cojines</option>
                <option>Camisetas</option>
                <option>Mascarillas</option>
                <option>Carteras</option>
                <option>Bolsos</option>
                <option>Relojs</option>
                <option>Peques</option>
            </select>
        </label>
        <label>
            Título:
            <input bind:value={TituloHTML} placeholder="Título" type="text">
        </label>
        <label>
            Descripción:<br>
            <textarea style="resize: none;max-width: 265px;" bind:value={DescriHTML} placeholder="Descripción" type="text"></textarea>
        </label>
        <label>
            Color:
            <input placeholder="Color" name="SelectColor" bind:value={ColorHTML}>
        </label>
        <label>
            Size:
            <input type="text" placeholder="Tamaño" name="SelectSize" bind:value={SizeHTML}>
        </label>
        <label>
            Stock:
            <input bind:value={StockHTML} placeholder="Stock" type="text">
        </label>
        <label>
            Envio:
            <input name="SelectEnvio" placeholder="Precio Envío" bind:value={EnvioHTML}>
        </label>
        <label>
            Precio:
            <input placeholder="Precio" type="text" bind:value={PrecioHTML}>
        </label>
        <label>
            Imagen:
            <input bind:files={ImgHTML} name="imgart"  type="file">
        </label>

        <button on:click={enviar}>Enviar</button>
	</section>
	</div>
</main>
<style>
    #Muestra{
    margin:10px;
    padding: 20px;
    text-align: center;
    border-radius: 25px 25px 25px 25px;
    -moz-border-radius: 25px 25px 25px 25px;
    -webkit-border-radius: 25px 25px 25px 25px;
    border: 3px solid #c4c4c4;
    background-color: #d6d6d6;    
}
input{
    display: block;
	position: relative;
	border-radius: 10px;
    max-width: 265px;
}
select{
    width: 265px;
    text-align: center;
    display: block;
	position: relative;
	border-radius: 10px;
}
#Secciones{
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding:10px;
}
</style>
