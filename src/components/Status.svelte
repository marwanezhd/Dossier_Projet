<script>
    import {
        Button,
        FormText,
        Input,
        Alert,
        Badge,
        ButtonGroup,
        Card,
        CardTitle,
        CardSubtitle,
        CardText,
        CardBody,
        CardHeader,
        CardFooter,
    } from "sveltestrap";
    import StatusCard from "./subComponents/StatusCard.svelte";

    export let displayState = "line"; // line | mosaique

    function handleDisplay() {
        if (displayState === "line") {
            displayState = "mosaique";
            console.log("displayState : " + displayState); // dbg
        } else {
            displayState = "line";
            console.log("displayState : " + displayState); // dbg
        }
    }
</script>

<div class="header">
    <h3>Broadcast status</h3>
    <div class="button-container">
        <Button color="light" on:click={handleDisplay}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-grid"
                viewBox="0 0 16 16"
            >
                <path
                    d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
                />
            </svg>
        </Button>

        <Button color="light" on:click={handleDisplay}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
            </svg>
        </Button>
    </div>
</div>

<main class="box">
    <StatusCard {displayState} />
</main>

<style>
    :root {
        --t_1: 1.4s;
        --t_2: 2.6s;
        --t_3: 3.4s;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .button-container {
        padding: 1vh;
        display: flex;
        gap: 1vh;
    }

    @keyframes fadeInOut {
        from {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        60% {
            box-shadow: 1vh 0.5vh 0.4vh 0vh #0c3c6c85;
        }
        to {
            box-shadow: 1vh 0.5vh 0.4vh 0vh #0c3c6c85;
            opacity: 1;
        }
    }

    .box {
        margin: 2vh;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .centered-content {
        text-align: center;
    }

    .Alert_title {
        text-align: left;
        font-weight: bold;
    }

    .btn_confirm {
        margin-top: 4vh;
    }
</style>
