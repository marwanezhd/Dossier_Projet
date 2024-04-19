<script>
    import { Card, Input } from "sveltestrap";
    import { afterUpdate } from "svelte";

    let selectedOption = "ALL"; // Définir l'option par défaut
    let showCards = true;

    const handleOptionChange = (event) => {
        selectedOption = event.target.value;
        showCards = false; // Réinitialiser la valeur pour déclencher l'animation à nouveau
        afterUpdate(() => {
            showCards = true; // Activer l'animation après la mise à jour du DOM
        });
    };
</script>

<main class="main_box">
    <h2 class="main_title">
        <div style="display: flex; align-items: center;">
            <span style="margin-right: 2vh;">Collection</span>
            <Input
                type="select"
                style="width: auto; background-color: transparent; border-color: #0c3c6c85;"
                bind:value={selectedOption}
                on:change={handleOptionChange}
            >
                {#each ["ALL", "BROADCAST", "PLAYLIST", "BLOCK"] as option}
                    <option value={option}>{option}</option>
                {/each}
            </Input>
        </div>
    </h2>
    <hr style="margin-bottom: 6vh;" />
    <!-- media list -->
    <div class="container medialist" align="center">
        <div class="row">
            {#each Array(51) as _, index}
                {#if showCards == true}
                    <div class="col">
                        <div
                            class="media_card hovered"
                            style="animation-delay: {index * 0.111}s;"
                        >
                            <div
                                style="display: flex; justify-content: space-between; align-items: center;"
                            >
                                <div
                                    style="display: flex; align-items: center; color: #0838816a;"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        class="bi bi-filetype-m4p"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM.706 15.849v-2.66h.038l.952 2.16h.516l.946-2.16h.038v2.66h.715V11.85h-.8l-1.14 2.596h-.026L.805 11.85H0v3.999zm5.237-3.999q-.393.65-.79 1.3t-.748 1.31v.648h1.937v.741h.74v-.741h.49v-.639h-.49V11.85H5.944Zm-.82 2.62v-.021q.27-.51.571-1.017.304-.507.607-.984h.04v2.021H5.124Zm2.893-2.62h1.6q.434 0 .732.179.302.175.46.477t.158.677-.16.677q-.159.298-.464.474a1.45 1.45 0 0 1-.732.173h-.803v1.342h-.79zm2.06 1.714a.8.8 0 0 0 .085-.381q0-.34-.185-.521-.184-.183-.513-.182h-.659v1.406h.66a.8.8 0 0 0 .374-.082.57.57 0 0 0 .238-.24"
                                        />
                                    </svg>
                                    <span
                                        style="margin-left: 0.5rem; font-weight: bold; color: #0c3c6ccf;"
                                        >media {index + 1}</span
                                    >
                                </div>
                                <div
                                    style="margin-right: 1vh; color: #0838816a;"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        class="bi bi-play-circle"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                                        />
                                        <path
                                            d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</main>

<style>
    .test {
        color: #0c3c6ccf;
    }

    .medialist {
        overflow-y: scroll;
        height: 80vh; /* Vous pouvez ajuster la hauteur selon vos besoins */
    }

    .medialist::-webkit-scrollbar {
        width: 10px;
    }

    .medialist::-webkit-scrollbar-track {
        background-color: inherit;
    }

    .medialist::-webkit-scrollbar-thumb {
        background-color: #516e9842;
        border-radius: 5px;
    }

    .medialist::-webkit-scrollbar-thumb:hover {
        background-color: #0838816a;
        border-radius: 5px;
    }
    /* playlist scrollbar end of block */

    .main_title {
        margin-top: 4vh;
        margin-left: 2vh;
        margin-bottom: 4vh;
    }

    .media_card {
        border-radius: 1vh;
        border: solid #0c3c6c85 0.2vh;
        width: 20vw;
        margin: 1vh;
        padding: 1.4vh;
        opacity: 0;
        animation: fadeIn 0.1s ease-in forwards;
    }

    .hovered:hover {
        cursor: pointer;
        background-color: #516e9842;
        border: solid #0c3c6c85 1vh;
        border-width: 0vh 0vh 0vh 1vh;
        transition: background-color 0.2s ease;
        transition: border 0.2s ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
