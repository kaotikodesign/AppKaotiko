<script>
const getDatosURL = 'http://localhost:3000/api/datos/';
//export var page;
var NewUser = [];

function getDatos () {
    fetch(getDatosURL)
        .then(
            resp=>resp.json()
        )
        .then(
            obj=>{//De la base de datos
				var UltimoUsuario = obj.DatosUsuario.length-1;//Ultimo usuario
				NewUser = obj.DatosUsuario;
                }
        )
	  }
		  
getDatos();

</script>

<main>	
	{#each NewUser as idx}
		<ul class="BoxUser">
			<li>Nombre: {idx.Nombreusu}</li>
			<li>Apellido: {idx.Apellidosusu}</li>
			<li>Telefono: {idx.Telfusu}</li>
			<li>Instagram: {idx.Instausu}</li>
			<li>Email: {idx.Emailusu}</li>
			<li>Socio: {idx._id}</li>
			<li>Dirección: {idx.Direccusu}</li>
		</ul>
	{/each}
</main>

<style>
	/*#PorEtiqueta{
	margin-top: 1px;
	display: flex;
    justify-content: center;
    padding-top: 10px;
    text-align: center;
    background-color: #d6d6d6; 
	}*/

	/*IMPORTAR FUENTE
	@font-face {
  	font-family: "Mystery Quest";
  	src: url("mystery-quest.woff2");
	}
	*/

	.BoxUser{
	display: inline-table;
	margin:10px;
    padding: 20px;
	padding-left: 35px;
    border-radius: 25px 25px 25px 25px;
    -moz-border-radius: 25px 25px 25px 25px;
    -webkit-border-radius: 25px 25px 25px 25px;
    border: 3px solid #c4c4c4;
    background-color: #d6d6d6; 
	width: 300px;  
	list-style-type: none;
	}

</style>