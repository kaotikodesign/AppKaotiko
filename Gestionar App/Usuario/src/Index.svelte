<script>   
        import Menu from './Menu.svelte';
        import App from './App.svelte';

        import Galeria from './Galeria.svelte';
        import Usuario from './Usuario.svelte';
       // import Concursos from './Concursos.svelte';
        import Articulos from './Articulos.svelte';
        var type = '3D'
        var page = 'Menu';

</script>    
<main>
        {#if page === 'Menu'}        
            <Menu bind:page />    
        {:else if page === 'App'}
            <App bind:page bind:type={type}/>
        {:else if page === 'Galeria'}
            <Galeria bind:page/>        
        {:else if page === 'Articulos'}
            <Articulos bind:type={type} bind:page/>
        {:else if page === 'Usuario'}
            <Usuario bind:page  bind:type={type}/>
        {/if}

</main>
    
    <style>

    </style>
