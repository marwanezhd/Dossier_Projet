<script>
    import { onMount } from "svelte";
    import { Form, FormGroup, Label, Input, Button } from "sveltestrap";

    export let username;
    export let password;
    export let isLogged;
    let animatedText = "";

    function handleSubmit(event) {
        event.preventDefault();
        // Logique de gestion de la soumission du formulaire
        console.log("Nom d'utilisateur:", username);
        console.log("Mot de passe:", password);
        isLogged = true;
    }

    onMount(() => {
        // Function to animate text letter by letter
        const text = "Visual Flow";
        let index = 0;

        const animateText = () => {
            if (index < text.length) {
                animatedText += text.charAt(index);
                index++;
                setTimeout(animateText, 190); // Ajuste le délais (ms) entre chaque lettres
            }
        };
        animateText();
    });
</script>

<div class="card">
    <div class="logo">
        <h1>{animatedText}</h1>
    </div>

    <h3 style="color: #c8cad4; font-weight: bold; text-align: center;">
        Login
    </h3>
    <Form on:submit={handleSubmit} style="margin-top: 4vh; color: #C9CCD8;">
        <FormGroup>
            <Label for="username">Username</Label>
            <Input
                type="text"
                bind:value={username}
                id="username"
                placeholder="Saisissez votre nom d'utilisateur"
                required
            />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
            <Input
                type="password"
                bind:value={password}
                id="password"
                placeholder="Saisissez votre mot de passe"
                required
            />
        </FormGroup>
        <div align="center" style="margin-top: 5vh;">
            <Button
                color="light"
                type="submit"
                style="color: #0c3c6c85; font-weight: bolder;">Connect</Button
            >
        </div>
    </Form>
</div>

<style>
    .logo {
        margin-bottom: 16vh;
    }

    .logo > h1 {
        color: #dee0eb;
        font-weight: bold;
        text-align: center;
    }

    .card {
        border: none;
        padding: 2vh;
        width: 30vw;
        background-color: transparent;
    }
</style>
