<script>
    import { onMount } from "svelte";
    import { getStorage, ref, listAll } from "firebase/storage";

    let fileList = [];
    let error = null;
    let loading = true;

    // Initialize Firebase Storage
    const storage = getStorage();

    const fetchFiles = async () => {
        try {
            // List all files in the "media" directory
            const storageRef = ref(storage, "media");
            const files = await listAll(storageRef);
            fileList = files.items.map((file) => file.name);
            console.log("Files loaded successfully from Firebase Storage!");
        } catch (storageError) {
            console.error(
                "Error fetching files from Firebase Storage:",
                storageError,
            );
            error = "Error fetching files from Firebase Storage.";
        } finally {
            loading = false;
        }
    };

    onMount(fetchFiles);
</script>

<main class="box">
    <div class="centered-content">
        {#if loading}
            <p>Loading files...</p>
        {:else if error}
            <p>{error}</p>
        {:else if fileList.length > 0}
            <h4>Liste des fichiers :</h4>
            <ul>
                {#each fileList as file}
                    <li>{file}</li>
                {/each}
            </ul>
        {:else}
            <p>No files available.</p>
        {/if}
    </div>
</main>

<style>
    /* Ajoutez vos styles ici si nécessaire */
</style>
