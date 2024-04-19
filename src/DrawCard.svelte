<script>
    import { Card } from "sveltestrap";
</script>

<main class="card-container">
    <div class="card">
        Server
        <br />
        <div align="center" style="padding-top: 2vh;">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-server" viewBox="0 0 16 16">
            <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4z"/>
            <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.5 6.5 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8s-3.809-.317-5.208-.876a6.5 6.5 0 0 1-1.458-.79z"/>
            <path d="M14.667 11.668a6.5 6.5 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.5 6.5 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667z"/>
          </svg>
        </div>
    </div>
    <div class="card" style="border-right: 1.3vh solid #1084f9;">Middleware</div>
    <div class="card">
        User
        <br />
        <div align="center" style="padding-top: 2vh;">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
            <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2"/>
            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783Q16 12.312 16 12V4a2 2 0 0 0-2-2z"/>
          </svg>
        </div>
    </div>
</main>

<style>
    .card-container {
        padding-left: 15vh;
        padding-right: 15vh;
        position: relative;
        height: 50vh; /* Ajustez la hauteur en fonction de vos besoins */
    }

    .card {
        font-weight: bold;
        color: #1084f9;
        width: 40vw;
        height: 25vh;
        position: absolute;
        background-color: white; /* Ajoutez un fond blanc ou transparent pour éviter le chevauchement du texte */
        padding: 2vh; /* Ajustez le rembourrage en fonction de vos besoins */
        border: 1px solid #ddd; /* Ajoutez une bordure pour séparer les cartes */
        border-radius: 5px; /* Ajustez la bordure en fonction de vos besoins */
        box-shadow: 1.5vh 0 2vh 0px #00000080;
    }
    

    .card:nth-child(1) {
        border: 0.1vh solid #0c3c6c85;
        border-top-left-radius: 0vh;
        border-left: 1.3vh solid #0c3c6c85;

        top: 0vh; /* Ajustez la position verticale de la deuxième carte */
        z-index: 1; /* Assurez-vous que la deuxième carte est au-dessus de la première */
        animation: appearCard_1 1.5s ease forwards;
	}

	@keyframes appearCard_1 {
		from {
			transform: translateY(-200%);
		}
		to {
			transform: translateY(0);
			background-color: #dee0eb;
		}
	}

    .card:nth-child(2) {
        border: 0.1vh solid #1084f9;
        border-top-left-radius: 0vh;
        border-left: 1.3vh solid #1084f9;

        top: 6vh; /* Ajustez la position verticale de la deuxième carte */
        z-index: 1; /* Assurez-vous que la deuxième carte est au-dessus de la première */
        margin-left: 4vh;
        animation: appearCard_2 2.5s ease forwards;
	}

	@keyframes appearCard_2 {
		from {
			transform: translateX(170%);
		}
		to {
			transform: translateX(0);
			background-color: #1084f956;
            color: rgba(0, 0, 0, 0.454);
        }
	}

    .card:nth-child(3) {
        border: 0.1vh solid #0c3c6c85;
        border-top-left-radius: 0vh;
        border-left: 1.3vh solid #0c3c6c85;

        top: 12vh; /* Ajustez la position verticale de la troisième carte */
        z-index: 2; /* Assurez-vous que la troisième carte est au-dessus de la deuxième */
        margin-left: 8vh;
        animation: appearCard_3 3s ease forwards;
	}

	@keyframes appearCard_3 {
		from {
			transform: translateX(230%);
		}
		to {
			transform: translateX(0);
			background-color: #dee0ebd0;
		}
	}
</style>
