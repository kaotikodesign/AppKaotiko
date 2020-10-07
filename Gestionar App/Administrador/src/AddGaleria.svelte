<script>
   // const getProductosURL = 'http://localhost:3000/api/Productos/';
    //const addArticuloURL = 'http://localhost:3000/api/addArticulo/';
   // var NuevoArticulo={};
    var ArtNameHTML,PrecioHTML,TitugalerialoHTML;
    var ImgHTML=[]
    var imgart = {};

function VaciarImput(){
    ArtNameHTML ='';
    PrecioHTML ='';
}

function enviar () {
        var url = 'http://localhost:3000/api/addArticulo/'
		var data = new FormData();
		data.append('Nombreart',ArtNameHTML);
		data.append('Precioart',PrecioHTML);
        data.append('imgart',ImgHTML[0]);
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
		    <h2>Añade Imagen</h2>
            <label>
                Nombre:
                <input placeholder="Galeria" name="Elemento" bind:value={ArtNameHTML}>
            </label>
            <label>
                Título:
                <input bind:value={TitugalerialoHTML} placeholder="Título" type="text">
            </label>
            <label>
                Descripcion:
                <input placeholder="Descripción" type="text" bind:value={PrecioHTML}>
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


#Secciones{
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding:10px;
}
</style>
