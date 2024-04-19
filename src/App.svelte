<!-- Main.svelte -->
<script>
    import { Icon } from "sveltestrap";
    import LoginCard from "./LoginCard.svelte";
    import DrawCard from "./DrawCard.svelte";
    import ComponentHandler from "./ComponentHandler.svelte";

    export let username = undefined;
    export let password = undefined;
    //export let token = undefined;
    export let isLogged = undefined; // Fix the typo here

    document.title = "visual flow";

	function UserlogOut() {
        isLogged = undefined;
	}
</script>

<main class="box">
    {#if !isLogged} <!-- Fix the typo here -->

        <div class="gauche">
            <LoginCard bind:username bind:password bind:isLogged on:logout={UserlogOut}/>
        </div>

        <div class="droite" align="center">
            <div class="container">
                <DrawCard />
                <h4 class="sentence">
                    Control the entire process
                </h4>
                <div class="row">
					<div class="col">
						<div class="first">
							<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
								<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
								<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
							</svg>
							<br />
							<h4 class="title">Overview</h4>
						</div>
					</div>
					<div class="col">
						<div class="second">
							<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
							</svg>
							<br />
							<h4 class="title">Statistics</h4></div>
					</div>
					<div class="col">
						<div class="third">
							<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
								<path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
							</svg>
							<br />
							<h4 class="title">Modular</h4>
						</div>
					</div>
				</div>
            </div>
        </div>
    {:else}
        <ComponentHandler {username} {password } bind:isLogged on:logout={UserlogOut}/>
    {/if}
</main>

<style>
	.title {
		color: #0c3c6c85;
		padding-top: 2vh;
	}
	
	/* ================================================ */
	.first {
		padding-top: 2vh;
		color: #1084f9;
		font-weight: bold;
		animation: appearFirstItem 2.6s ease forwards;
	}
	@keyframes appearFirstItem {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.second {
		padding-top: 2vh;
		color: #1084f9;
		font-weight: bold;
		animation: appearSecondItem 2.6s ease forwards;
	}
	@keyframes appearSecondItem {
		0% {
			opacity: 0;
		}
		65% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.third {
		padding-top: 2vh;
		color: #1084f9;
		font-weight: bold;
		animation: appearThidItem 2.6s ease forwards;
	}
	@keyframes appearThidItem {
		0% {
			opacity: 0;
		}
		80% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.box {
		overflow: hidden;
		display: flex;
		height: 100vh;
		background-color: #c8cad4;
	}
	/* ================================================ */

	.gauche {
		padding: 2vh;
		width: 35vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-shadow: 2vh 0 1vh 0px #00000080;
		animation: appearFromLeft 3.8s ease forwards;
	}

	@keyframes appearFromLeft {
		from {
			box-shadow: 0vh 0 0vh 0px #00000080;
			transform: translateX(-100%);
			background-color: #c8cad4;
		}
		50% {
			transform: translateX(-10);
		}
		70% {
			box-shadow: 0vh 0 0vh 0px #00000080;
			transform: translateX(0);
			background-color: #0c3c6c85;
		}
		to {
			background-color: #0c3c6c85;
			box-shadow: 1.7vh 0 1vh 0px #00000080;
		}
	}

	.droite {
		background-color: #c8cad48b;
		width: 65vw;
		height: 100vh;
		display: flex;
		align-items: center;
		padding: 4vh;
	}

	.sentence {
		margin-bottom: 4vh;
		color: #0c457ebe;
		animation: appearSentence 5.6s ease forwards;
	}
	@keyframes appearSentence {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
