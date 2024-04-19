# Easyplayout [1.1] (Svelte + Vite)

# Mise à jour des paquets npm
npm update


# Installation des dépendances du projet.
npm install


# Construction du projet Svelte.
npm run build



# Déploiement vers un distant (proto à tester).

$remoteUsername = "Username"
$remoteIpAddress = "remoteIp"
$remoteDirectory = "/path/.."


# Copie des fichiers vers le serveur distant.

$session = New-PSSession -ComputerName $remoteIpAddress -Credential $remoteUsername
Copy-Item -Path "/path/localDirectory" -Destination $remoteDirectory -Recurse -ToSession $session

# Redémarrage du serveur Web distant.

Invoke-Command -Session $session -ScriptBlock {
    Restart-Service -Name "service_name"
}


# Fermeture de la session distante
Remove-PSSession $session