<script>   
        export var page;

function menu(toPage) {
    page = toPage;

}
</script>    
<main> 
    <div id="MainMenu">
        <img class="imgBtn" alt="3D" src="uploads/Botones/BtnTienda.png" on:click={()=>menu('App')}/>
        <img class="imgBtn" alt="Camisetas" src="uploads/Botones/BtnGaleria.png" on:click={()=>menu('Galeria')}/>
        <img class="imgBtn" alt="User" src="uploads/Logos/Logo_user.png" />
    </div> 
    <div class="oferta">
        <img alt ="imagen" class="ImgCentralOferta" src="uploads/Logos/imsta35919.png">
    </div>
</main>
    
    <style>
       /*Pagina web*/
       .ImgCentralOferta{
    position:absolute;
    max-width: 100vw;
    margin:auto;
    top:10px;
    left:200px;
    }

    .imgBtn{            
    max-width: 125px;
    max-height: 125px;
    border-radius: 50%;
    display: flex;
	}

    #MainMenu{
        text-align: center; 
    }   
    </style>
