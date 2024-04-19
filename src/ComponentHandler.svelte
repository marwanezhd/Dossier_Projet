<script>
    import { Image } from "sveltestrap";
    
    import Status from "./components/Status.svelte";
    import Collection from "./components/Collection.svelte";
    import Upload from "./components/Upload.svelte";
    import Statistics from "./components/Statistics.svelte";
    import Schedules from "./components/Schedules.svelte";
    import Documentation from "./components/Documentation.svelte";

    export let username;
    export let password;

    let component = 'status';
    export let isLogged;

    function UserlogOut() {
        isLogged = undefined;
    }


    function switchComponent(event) {
        const clickedDivId = event.currentTarget.id;

        switch (clickedDivId) {
            case "status":
                component = "status";
                break;
            case "collection":
                component = "collection";
                break;
            case "upload":
                component = "upload";
                break;
            case "statistics":
                component = "statistics";
                break;
            case "schedules":
                component = "schedules";
                break;
            case "documentation":
                component = "documentation";
                break;
            default:
                component = "status";
                break;
        }
        // Émettre un événement personnalisé lorsque la déconnexion se produit
    if (component === 'logout') {
      const customEvent = new CustomEvent('logout');
      dispatchEvent(customEvent);
    }
        return 0;
    }
</script>

<main class="box">
    <div class="menu_bar">
        <div class="menu_center" align="center">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="menu_item" id="status" on:click={switchComponent}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
                </svg></div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="menu_item" id="collection" on:click={switchComponent}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-collection-play" viewBox="0 0 16 16">
                <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1m2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848z"/>
                <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5z"/>
                </svg></div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="menu_item" id="upload" on:click={switchComponent}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"/>
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                </svg></div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="menu_item" id="statistics" on:click={switchComponent}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
                </svg></div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="menu_item" id="schedules" on:click={switchComponent}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-calendar4" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                </svg>
            </div>
        </div>


        <div class="menu_bottom" align="center">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="menu_item" id="documentation" on:click={switchComponent}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                </svg></div>
            <div class="menu_item" id="logout"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg></div>
        </div>
    </div>

    
    <div class="content">
        {#if component == "status"}
            <Status />
        {/if}
        {#if component == "collection"}
            <Collection />
        {/if}
        {#if component == "upload"}
            <Upload />
        {/if}
        {#if component == "statistics"}
            <Statistics />
        {/if}
        {#if component == "schedules"}
            <Schedules />
        {/if}
        {#if component == "documentation"}
            <Documentation />
        {/if}
    </div>
</main>

<style>
    .box {
        width: 100vw;
        height: 100vh;
        display: flex;
    }

    .menu_bar {
        background-color: #0c3c6c85;
        width: 10vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .menu_item {
    color: #c8cad4;
    padding: 1vh 1vh 2vh 1vh;
    transition: color 0.155s;
}

.menu_item:hover {
    color: black;
}

    
    .menu_center {
        margin-top: 25vh;
    }

    .menu_bottom {
        margin-top: auto; /* Positionne la div au bas de la .menu_bar */
        margin-bottom: 2vh;
    }

    .content {
        width: 90vw;
        background-color: #c8cad4;
    }
</style>
