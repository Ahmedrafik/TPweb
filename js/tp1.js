/* Boucle for */

var k = 1;
for (var i = 1; i < 10; i++) {
	k+=i;
	console.log(k);
}

/* Fontion nommée*/

function estDivisible(nbMax, div){
	for (var i = 0; i < nbMax; i++) {
		if(i%div == 0){
			console.log(i,'est divisible par', div);
		}
	};
}

estDivisible(100, 7);
estDivisible(100, 13);

/* Listes */

var list = [2,7,8,9,15,28];

function divisible(nbMax, div){
	var response = [];
	for (var i = 0; i < nbMax; i++) {
		if (i%div == 0) {
			response.push(i);
		};
	};
	return response;
}

for(var key in list){
	console.log(list[key], 'divise', divisible(100, list[key]));
}

/* Fonction en parametre */

function testmod1(a, b){
	return a%b==1;
}

function testmod2(a, b){
	return a%b==0;
}

testmod1(7,3);
testmod1(8,3);
testmod2(7,3);
testmod2(8,3);

function satisfait(a, b, fct){
	return fct(a, b);
}

console.log('satisfait(7,3, testmod1) = ', satisfait(7,3, testmod1));
console.log('satisfait(7,3, testmod2) = ', satisfait(7,3, testmod2));

/* Fonctiono anonyme */

console.log('satisfait(7,3, modulo) = ', satisfait(7,3, function(a,b){
	return a%b==0;
}));


console.log('83 modulo 5 : ',
(function(a){
	return a%5==0;
})(83));

console.log('85 modulo 5 : ',
(function(a){
	return a%5==0;
})(85));

console.log(
(function(a){
	return satisfait(85,5,function(a,b){
		return a%b==0;
	});
})(266));

/* TP-2 Fonction Bizarre dans le cours */

function bizarre(){
	var res = 0;
	function into(max){
		for (var i = 0; i < max ; i++) {
			res++;		
		};
	}
	for (var i = 0; i < 10; i++) {
		into(10);
	};
	return res;
}
/* autre correction possible use strict */

console.log(bizarre());

/* TP-3 */
IDBOOK = 1;

function Livre(){
	this.id = IDBOOK;
	IDBOOK++;
	this.title = "Title_empty";
	this.emprunte=false;
}

Livre.prototype.setTitle = function(title){
	this.title = title;
}

Livre.prototype.setEmprunt = function(){
	if (this.emprunte == true) {
		this.emprunte=false;
	}
	else{
		this.emprunte=true;
	}
}

var livre1 = new Livre();
var livre2 = new Livre();

livre1.setTitle('Le journal de mickey');
livre1.setEmprunt();
livre2.setTitle('Zootopia');

var bd = [livre1, livre2, new Livre()];

function sizeRayon(rayon){
	return rayon.length;
};
/*
console.log(livre1.title);
console.log(livre2.title);
console.log(bd[0].title);
console.log(livre1.id);
console.log(livre2.id);

console.log(livre1.emprunte);
console.log(livre2.emprunte);
console.log(bd[2].emprunte);
*/
console.log('taille du rayon bd : ', sizeRayon(bd));
var bok

console.log(bd);

function nbLivreDisponible(rayon){
	var res = 0;
	var book;
	for(book in rayon){
		if (rayon[book].emprunte == false) {
			res++;
		}
	}
	return res;
};

console.log('Nombre de bd disponible :', nbLivreDisponible(bd));