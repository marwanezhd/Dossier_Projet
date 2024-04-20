<script>
  import { onMount } from 'svelte';

  let fileContent = '';

  onMount(async () => {
      try {
          const response = await fetch('./src/App.svelte'); // Chemin vers le fichier App.svelte
          if (!response.ok) {
              throw new Error('Failed to fetch file content');
          }
          fileContent = await response.text();
      } catch (error) {
          console.error('Error fetching file content:', error);
      }
  });
</script>

<pre>
  <code>{fileContent}</code>
</pre>
