// menuhidden est un booléen qui verifie l'affichage du menu mobile
var menuhidden = 1;

function loadFile(file, div) {
  
    // On crée une requete Http
    var request = new XMLHttpRequest();

    // On ouvre le fichier en parametre et on récupère le contenu avec le methode GET
    request.open('GET', file);


    // On attend l'évenement readystatechange qui permet de connaitre le status de la requete
    request.addEventListener('readystatechange', function() { 

    	//requete est terminer, la reponse est prete et le fichier est charger sans erreur
        if (request.readyState === 4 && request.status === 200) { 

        	//on trouve la div qui nous intérresse et on y insere le contenu chargé dans la requete
            document.getElementsByTagName(div)[0].innerHTML = '<span>' + request.responseText + '</span>'; 

        }

    }, false);

    request.send(null); 

}

function pagePath(){
    var title =document.getElementsByTagName('title')[0].innerHTML;
    var i = 1;
    var page =title[0];
    while(title[i] != '|'){
        page +=title[i];
        i++;
    }
    document.getElementsByTagName('p')[0].innerHTML += page;
}

window.onload = function(){
	loadFile('header.html', 'header');
    loadFile('aside.html', 'aside')
    pagePath();
}

function move(elem, initpos, finalpos) {
    var way = 1;
    if (menuhidden == 0) {
        var aux = initpos;
        initpos = finalpos;
        finalpos = aux;
        way = -1;
    };
    var left = initpos;
    function frame() {
    left += way ;
    elem.style.left = left + 'px'; 
    if (left == finalpos) 
        clearInterval(id);
    }
    var id = setInterval(frame, 5) 
    menuhidden = (menuhidden + 1)%2;
}

