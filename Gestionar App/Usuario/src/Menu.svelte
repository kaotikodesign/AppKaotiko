<script>   
        export var page;

function menu(toPage) {
    page = toPage;

}
</script>    
<main> 
    <div id="MainMenu">
        <img alt="3D" src="uploads/Botones/BtnTienda.png" on:click={()=>menu('App')}/>
        <img alt="Camisetas" src="uploads/Botones/BtnGaleria.png" on:click={()=>menu('Galeria')}/>
        <img alt="User" src="uploads/Logos/Logo_user.png" />
    </div>  
</main>
    
    <style>
    #MainMenu{
        text-align: center;
    }
        img{        
    max-width: 160px;
    max-height: 160px;
    border-radius: 50%;
	}
   
    </style>
