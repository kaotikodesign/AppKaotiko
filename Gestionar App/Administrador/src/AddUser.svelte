<script>
const getDatosURL = 'http://localhost:3000/api/Datos/';
const addDatosURL = 'http://localhost:3000/api/addDatos/';
var usunameHTML,usuapellidosHTML,usutelfHTML,usuinstaHTML,emailHTML,DireccionHTML;

function VaciarImput(){
    //console.log('click');
    usunameHTML ='';
    usuapellidosHTML ='';
    usutelfHTML ='';
    usuinstaHTML ='';
    emailHTML ='';
    DireccionHTML = '';
}

function enviar () {
    var url= 'http://localhost:3000/api/addDatos/';
    var data = new FormData();
        data.append('Nombre',usunameHTML);
		data.append('Apellidos',usuapellidosHTML);
		data.append('Telefono',usutelfHTML);
        data.append('Instagram',usuinstaHTML);
        data.append('Email',emailHTML);
        data.append('Direcc',DireccionHTML);
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
	<div id="todasseciones">
		<section id="informa">
		<h2>Regitra Usuario</h2>
        <label>
            Nombre:
            <input bind:value={usunameHTML} placeholder="Nombre" type="text">
        </label>
        <label>
            Apellidos:
            <input bind:value={usuapellidosHTML} placeholder="Apellidos" type="text">
        </label>
        <label>
            Num. Telf:
            <input bind:value={usutelfHTML} placeholder="Teléfono" type="text">
        </label>
        <label>
            Instagram:
            <input bind:value={usuinstaHTML} placeholder="@Instagram" type="text">
        </label>
        <label>
            Correo Electronico:
            <input bind:value={emailHTML} placeholder="Correo@gmail.com" type="email">
        </label>
        <label>
            Direccion:
            <input bind:value={DireccionHTML} placeholder="Domicilio, C.P" type="email">
        </label>

        <button on:click={enviar}>Enviar</button>
	</section>
	</div>
</main>

<style>
	#informa{
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
}
#todasseciones{
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding:10px;
}

</style>