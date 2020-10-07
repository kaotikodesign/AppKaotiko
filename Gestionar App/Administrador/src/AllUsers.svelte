<script>
const getDatosURL = 'http://localhost:3000/api/datos/';
const addDatosURL = 'http://localhost:3000/api/addDatos/';
var currentDiv;
var Instagram,Telefono,Nombre,idx,Buscaretiqueta,BorrarUser;
var radiovalue = '';

const NuevosUsuarios = {};
var NewUser = [];
var borrado;

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
function obtenerEtiqueta() {
	radiovalue=document.Etiquetaform.Etiqueta.value;
	return radiovalue;
};


async function BorraUser(id){
	var BorrarSeguro = window.confirm('Seguro que deseas borrarlo?');    //------------REVISAR
	if(BorrarSeguro==true){
    var url = `http://localhost:3000/borrarUser/?id=${id}`;
    await fetch(url);
    getDatos();//Refresca la pagina.
    }
	}


		  
getDatos();

</script>

<main>
	<div id="PorEtiqueta">
		<navbar>
			<input id="tiketNom" placeholder ="Introduce Etiqueta" type="text" bind:value={Buscaretiqueta}>
			<form name="Etiquetaform" id="idform" on:click={()=>{obtenerEtiqueta()}}>
				<input type="radio" name="Etiqueta" value="Instausu" /> Ins
				<input type="radio" name="Etiqueta" value="Telfusu" /> telf
				<input type="radio" name="Etiqueta" value="Nombreusu" /> Nombre
				<input type="radio" name="Etiqueta" value="" checked /> Todos
			</form>
		</navbar >
	</div>
	<div>
			
		<!--// BUSCA POR ETIQUETA -- FUNCIONA-->
			{#if 'Nombreusu' == radiovalue}
			
				{#each NewUser as idx}
					{#if idx.Nombreusu == Buscaretiqueta}
					<ul class="BoxUser">
						<li>Nombre: {idx.Nombreusu}</li>
						<li>Apellido: {idx.Apellidosusu}</li>
						<li>Telefono: {idx.Telfusu}</li>
						<li>Instagram: {idx.Instausu}</li>
						<li>Email: {idx.Emailusu}</li>
						<li>Socio: {idx._id}</li>
						<li>Dirección: {idx.Direccusu}</li>
						<li><button style="background-color: #d24646 ;"  on:click={()=>{BorraUser(idx._id)}}> Borrar </button>
							<button> Editar </button>
						</li>
					</ul>	
					{/if}
				{/each}

				{:else if 'Instausu' == radiovalue}
				{#each NewUser as idx}
					{#if (idx.Instausu==Buscaretiqueta)}
					<ul class="BoxUser">
						<li>Nombre: {idx.Nombreusu}</li>
						<li>Apellido: {idx.Apellidosusu}</li>
						<li>Telefono: {idx.Telfusu}</li>
						<li>Instagram: {idx.Instausu}</li>
						<li>Email: {idx.Emailusu}</li>
						<li>Socio: {idx._id}</li>
						<li>Dirección: {idx.Direccusu}</li>
						<li><button style="background-color: #d24646 ;"  on:click={()=>{BorraUser(idx._id)}}> Borrar </button>
							<button> Editar </button>
						</li>
					</ul>	
					{/if}
				{/each}

				{:else if ('Telfusu'==radiovalue)}
				{#each NewUser as idx}
					{#if (idx.Telfusu==Buscaretiqueta)}
					<ul class="BoxUser">
						<li>Nombre: {idx.Nombreusu}</li>
						<li>Apellido: {idx.Apellidosusu}</li>
						<li>Telefono: {idx.Telfusu}</li>
						<li>Instagram: {idx.Instausu}</li>
						<li>Email: {idx.Emailusu}</li>
						<li>Socio: {idx._id}</li>
						<li>Dirección: {idx.Direccusu}</li>
						<li><button style="background-color: #d24646 ;"  on:click={()=>{BorraUser(idx._id)}}> Borrar </button>
							<button> Editar </button>
						</li>
					</ul>	
					{/if}
				{/each}
			{:else}
			{#each NewUser as idx}
			<ul class="BoxUser">
				<li>Nombre: {idx.Nombreusu}</li>
				<li>Apellido: {idx.Apellidosusu}</li>
				<li>Telefono: {idx.Telfusu}</li>
				<li>Instagram: {idx.Instausu}</li>
				<li>Email: {idx.Emailusu}</li>
				<li>Socio: {idx._id}</li>
				<li>Dirección: {idx.Direccusu}</li>
				<li><button style="background-color: #d24646 ;"  on:click={()=>{BorraUser(idx._id)}}> Borrar </button>
					<button> Editar </button>
				</li>
			</ul>	
			{/each}	{/if}
	</div>
</main>

<style>
	#PorEtiqueta{
	margin-top: 1px;
	display: flex;
    justify-content: center;
    padding-top: 10px;
    text-align: center;
    background-color: #d6d6d6; 
	}

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