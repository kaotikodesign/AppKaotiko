<script>
    //const getDatosURL = 'http://localhost:3000/api/Datos/';
    //const addDatosURL = 'http://localhost:3000/api/addDatos/';
    
        import AddUser from './AddUser.svelte';
        import Inicio from './Inicio.svelte';
        import AllUsers from './AllUsers.svelte';
        import Articulos from './Articulos.svelte';
        import AddGaleria from './AddGaleria.svelte';
        import Galeria from './Galeria.svelte';
        var page = 'Articulos';
    
        function menu(toPage) {
            page = toPage;
        }
    
    
    </script>
    
    <main>
        <div id="BtonSelection">
            <navbar >
                <button on:click={()=>menu('Articulos')}>Productos</button>
                <button on:click={()=>menu('Inicio')}>Crea un producto</button>
                <button on:click={()=>menu('AddUser')}>Registra Usuario</button>
                <button on:click={()=>menu('AllUsers')}>Todos los Usuarios</button>
                <button on:click={()=>menu('AddGaleria')}>Añadir Imagen</button>
                <button on:click={()=>menu('Galeria')}>Galeria Imagen</button>

                </navbar>
        </div>
        <div>
        {#if page === 'AddUser'}
            <AddUser/>        
        {:else if page === 'Articulos'}
            <Articulos/>
        {:else if page === 'AllUsers'}
            <AllUsers/>
        {:else if page === 'Inicio'}
            <Inicio/>
        {:else if page === 'AddGaleria'}
            <AddGaleria/>
        {:else if page === 'Galeria'}
            <Galeria/>
        {/if}
        </div>
    
    </main>
    
    <style>
    #BtonSelection{
        margin-top: 0px;
        display: flex;
        justify-content: center;
        padding-top: 10px;
        text-align: center;
        background-color: #d6d6d6; 
    }
    
   /* img{
        margin: 0px;
        max-width: 180px;
        vertical-align:middle;
    }*/
    
    button{
    min-width: 100px;
    max-width: 200px;
    height: 50px;
    border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    -webkit-border-radius: 10px 10px 10px 10px;
    border: 2px solid #c4c4c4;
    }
    </style>
