<script>
    let username = "marwanezhd";
    let repo = "Dossier_Projet";
    
    function getRawGitHubURL(username, repo) {
        console.log(`https://github.com/${username}/${repo}/raw/main/`)
        return `https://github.com/${username}/${repo}/raw/main/index.html`;
    }
</script>

<iframe title="github project" src={getRawGitHubURL(username, repo)} style="width: 100%; height: 100vh;"></iframe>

<iframe  title="github project" src={getRawGitHubURL(username, repo)} width="100%" height="400" frameborder="0" scrolling="no"></iframe>