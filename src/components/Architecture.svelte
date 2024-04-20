<script>
    import { Image } from 'sveltestrap';

    import diagramComponents from "../assets/diagram_components.png";
    import diagramFirebase from "../assets/diagram_firebase.png";
    import diagramVues from "../assets/diagram_vues.png";
    import BtnGoToCardMod from './subComponents/BtnGoToCardMod.svelte';
</script>
  
<BtnGoToCardMod />
<main class="main">
    <div class="store">
        {#each [1, 2, 3] as index}
            <div class="container" key={index}>
                {#if index == 1}
                    <h3 class="diagram_title">Architecture des composants de l'application</h3>
                    <div class="box">
                        <div class="center">
                            <Image src={diagramComponents} alt="" style="height: 50vh;"/>
                        </div>
                    </div>
                {/if}
                {#if index == 2}
                    <h3 class="diagram_title">Plan de l'app</h3>
                    <div class="box">
                        <div class="center">
                            <Image src={diagramVues} alt=""  style="height: 50vh;"/>
                        </div>
                    </div>
                {/if}
                {#if index == 3}
                    <h3 class="diagram_title">Architecture des collections de la firebase</h3>
                    <div class="box">
                        <div class="center">
                            <Image src={diagramFirebase} alt=""  style="height: 50vh;"/>
                        </div>
                    </div>
                {/if}
                
            </div>
        {/each}
    </div>
</main>

<style>
    .diagram_title {
        color: white;
    }

    .main {
        background-color: #0c3c6cb2;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* store */
    .store {
        width: 90vw;
        overflow-x: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1vh;
    }

    /* Scroll bar */
    .store::-webkit-scrollbar {
    width: 1vw; /* Largeur de la barre de défilement */
    }

    /* Pouce de la barre de défilement */
    .store::-webkit-scrollbar-thumb {
    background-color: #1f44695d; /* Couleur de fond du pouce */
    border-radius: 2vh; /* Arrondi du pouce */
    }

    /* Au survol de la barre de défilement */
    .store::-webkit-scrollbar-thumb:hover {
    background-color: #0c3c6cb2; /* Couleur de fond du pouce au survol */
    }

    /* Piste de la barre de défilement */
    .store::-webkit-scrollbar-track {
    background-color: inherit; /* Couleur de fond de la piste */
    }

    /* Au survol de la piste de la barre de défilement */
    .store::-webkit-scrollbar-track:hover {
    background-color: inherit; /* Couleur de fond de la piste au survol */
    }

    /*  end of store */


    .container {
        text-align: center;
    }

    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2vh; /* Marge supplémentaire entre le titre et l'image */
    }

    .center {
        background-color: #0c3c6c8a;
        border: solid 0.4vh #c8cad48b;
        border-radius: 2vh;
        padding: 1vh;
    }
</style>
