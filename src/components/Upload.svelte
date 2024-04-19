<script>
    import { storage } from "../lib/firebase.js";
    import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
    import { getFirestore, collection, addDoc } from "firebase/firestore";

    import { Button, FormText, Input, Alert, Badge, Card } from "sveltestrap";
    import IngestedFileList from "./subComponents/IngestedFileList.svelte";

    let selectedFile;
    const maxSizeInBytes = 1024 * 1024; // Exemple: Limite de 1 Mo

    const firestore = getFirestore();

    let ingestionAlert = false;

    const handleFileChange = (event) => {
        selectedFile = event.target.files[0];

        // Vérifier le poids du fichier lors de la sélection
        if (selectedFile && selectedFile.size > maxSizeInBytes) {
            console.log("File size exceeds the allowed limit.");
            // Réinitialiser le fichier sélectionné
            selectedFile = null;
        }
    };

    const handleFileUpload = async () => {
        if (selectedFile) {
            // Adjust the storage reference to include the "media" directory
            const storageRef = ref(storage, `media/${selectedFile.name}`);

            try {
                await uploadBytes(storageRef, selectedFile, {
                    contentType: selectedFile.type,
                });

                const downloadURL = await getDownloadURL(storageRef);

                // sucess Alert
                ingestionAlert = true;
                console.log("File uploaded successfully:", downloadURL);

                // Store file details in Firestore
                const fileObj = { name: selectedFile.name, downloadURL };

                try {
                    const mediaCollection = collection(
                        firestore,
                        "/media" + selectedFile.name,
                    );
                    await addDoc(mediaCollection, fileObj);
                } catch (firestoreError) {
                    console.error(
                        "Error adding file to Firestore:",
                        firestoreError,
                    );
                }
            } catch (error) {
                console.error("Error uploading file:", error.message);
            }
        } else {
            console.log(
                "No file selected or file size exceeds the allowed limit.",
            );
        }
    };
</script>

<main class="box">
    <div class="centered-content">
        {#if ingestionAlert == true}
            <Card color="success">
                {selectedFile.name} Added
            </Card>
        {:else}
            <IngestedFileList />
            <div
                style="padding: 2vh; border: solid 0.4vh #0c3c6c85; border-radius: 1vh; background-color: #0c3c6c3e; color: #e4e6ed; text-align: left;"
            >
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <Badge
                                color="light"
                                style="padding: 1.5vh; font-weight: bold;"
                                >No ingestion</Badge
                            >
                        </div>
                        <div class="col" align="right">
                            <Badge
                                color="light"
                                style="padding: 1.5vh; font-weight: bold;"
                                >History</Badge
                            >
                        </div>
                    </div>
                </div>
            </div>
            <Alert
                color="light"
                style="width: 50vw; border: solid 0.2vh #0c3c6c85; background-color: #e4e6ed; margin-top : 2vh;"
                align="center"
            >
                <h4 class="Alert_title">File ingestion</h4>
                <Input
                    style="margin-bottom: 2vh; margin-top: 4vh; width: 35vw;"
                    type="file"
                    name="file"
                    id="exampleFile"
                    on:change={handleFileChange}
                />
                <div class="btn_confirm">
                    <FormText>Add a file to your media collection</FormText>
                    <Button
                        on:hovered={() => (Button.style = "background-color: ")}
                        color="light"
                        style="margin-left: 1vh; background-color: #0c3c6c3e; color: white;"
                        on:click={() => {
                            ingestionAlert = true;
                            handleFileUpload();
                        }}>Confirm</Button
                    >
                </div>
            </Alert>
        {/if}
    </div>
</main>

<style>
    .box {
        margin: 2vh;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh; /* Pour centrer verticalement sur toute la hauteur de la vue */
    }

    .centered-content {
        text-align: center; /* Pour centrer le contenu à l'intérieur de .box */
    }

    .Alert_title {
        font-weight: bold;
    }

    .btn_confirm {
        margin-top: 4vh;
    }
</style>
