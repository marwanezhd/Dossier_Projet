<script>
    import { Button } from "sveltestrap";

    export let color;

    let divStyle = "height: 4vh; padding: 1vh;";
    let btnColor = "color: " + color + ";" + "font-weight: bold;";
</script>
<div style={divStyle}>
    <a href="/*">
        <Button color="light" style={btnColor}>Pannel</Button>
    </a>
</div>

<style>
</style>