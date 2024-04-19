<script>
    import { onMount } from "svelte";
    import {
        storage,
        ref,
        listAll,
        getDownloadURL,
        db,
    } from "../../lib/firebase";
    import { getFirestore, collection, getDocs } from "firebase/firestore";

    let mediaList = [];
    let error = null;
    let loading = true;

    const firestore = getFirestore();

    const fetchFiles = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "/media"));
            mediaList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log("Files loaded successfully from Firestore!");
        } catch (firestoreError) {
            console.error(
                "Error fetching files from Firestore:",
                firestoreError,
            );
            error = "Error fetching files from Firestore.";
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
        {:else if mediaList.length > 0}
            <h4>Liste des fichiers :</h4>
            <ul>
                {#each mediaList as { id, name, downloadURL }}
                    <li key={id}>
                        <a
                            href={downloadURL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {name}
                        </a>
                    </li>
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
