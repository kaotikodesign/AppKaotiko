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
        <img alt="3D" src="uploads/Botones/Btn_3d.png" on:click={()=>menu('Articulos','3D')}/>
        <img alt="Camisetas" src="uploads/Botones/BtnCamiseta.png" on:click={()=>menu('Articulos','Camisetas')}/>
        <img alt="Tazas" src="uploads/Botones/BtnTaza.png" on:click={()=>menu('Articulos','Tazas')}/>
        <img alt="Relojes" src="uploads/Botones/BtnReloj.png" on:click={()=>menu('Articulos','Relojes')}/>
        <img alt="Cojines" src="uploads/Botones/BtnCojin.png" on:click={()=>menu('Articulos','Cojines')}/>
        <img alt="User" src="uploads/Botones/BotonAtras.png" on:click={()=>menu('Menu')}/>
    </div>
        <p>Públicidad banner</p>
</main>
    
    <style>

    img{            
    max-width: 160px;
    max-height: 160px;
    border-radius: 50%;
	}
    #MainMenu{
        text-align: center; 
    }
    </style>
