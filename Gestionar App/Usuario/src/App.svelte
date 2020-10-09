<script>   

export var page = '3D';
export var type ;

function menu(toPage,toType) {
    page = toPage;
    type = toType;
}
</script>    
<main>
    <div id="MainMenu">
        <img class="imgBtn" alt="3D" src="uploads/Botones/Btn_3d.png" on:click={()=>menu('Articulos','3D')}/>
        <img class="imgBtn" alt="Camisetas" src="uploads/Botones/BtnCamiseta.png" on:click={()=>menu('Articulos','Camisetas')}/>
        <img class="imgBtn" alt="Tazas" src="uploads/Botones/BtnTaza.png" on:click={()=>menu('Articulos','Tazas')}/>
        <img class="imgBtn" alt="Relojes" src="uploads/Botones/BtnReloj.png" on:click={()=>menu('Articulos','Relojes')}/>
        <img class="imgBtn" alt="Cojines" src="uploads/Botones/BtnCojin.png" on:click={()=>menu('Articulos','Cojines')}/>
        <img alt="User" class="BtnFlotante" src="uploads/Botones/BotonAtras.png" on:click={()=>menu('Menu')}/>
    </div>
    <div class="oferta">
        <img alt ="imagen" class="ImgCentralOferta" src="uploads/Logos/imsta35919.png">
    </div>
        <p>Públicidad banner</p>
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

    .BtnFlotante{
        position:fixed;
        top:10px;
        right:10px;
        max-width:80px;
        max-height: 80px;
    }

    /* APP
      img{            
    max-width: 160px;
    max-height: 160px;
    border-radius: 50%;
	}
    #MainMenu{
        text-align: center; 
    }*/
    </style>
