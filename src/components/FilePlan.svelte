<script>
        import { Button, Card } from "sveltestrap";
    import BtnGoToCardMod from "./subComponents/BtnGoToCardMod.svelte";
    
        let path = '../../Documentation/Plan du dossier.pdf';
    </script>
    
    <div class="main">
        <BtnGoToCardMod color="#0c3c6cb2;"/>
        <div class="centered-card">
                <a href={path} target="_blank">
                        <Button style="color: #dfcdcd; background-color: #0c3c6c85; border-color: #dfcdcd;">Ouvrir le plan du dossier PDF</Button>
                </a>
                <Button style="color: #dfcdcd; background-color: #0c3c6c85; border-color: #dfcdcd; margin-top: 1vh;" href={path} download>Télécharger le plan du dossier</Button>
        </div>
    </div>
    
    <style>
        .main{
                width: 100vw;
                height: 100vh;
                background-color: #0c3c6c85;
        }

        .centered-card {
            border: solid 0.4vh #0f1f2e;
            border-radius: 1vh;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #0c3c6c85;
            padding: 10vh;
        }
    
        a {
            display: block;
            text-align: center;
            margin-top: 20px;
        }
    </style>