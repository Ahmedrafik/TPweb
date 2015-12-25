function loadFile(file, div) {
  
    var request = new XMLHttpRequest();

    // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
    request.open('GET', file);

    request.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone

        if (request.readyState === 4 && request.status === 200) { // Si le fichier est chargé sans erreur

            document.getElementById(div).innerHTML = '<span>' + request.responseText + '</span>'; // Et on affiche !

        }

    }, false);

    request.send(null); // La requête est prête, on envoie tout !

}


loadFile('header.html', 'header');