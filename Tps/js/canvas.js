var context;

window.onload = function(){
	var canvas = document.getElementById('canvas1');
	if(!canvas){
		console.log("Canvas inexistant !!");
		return;
	}
	context = canvas.getContext('2d');
	if (!context){
		console.log("context inexistant !!");
		return;
	}
	
	camembert(100, 100, 80);

	diagramme(250, 180)
};

function camembert(x, y, r){
	var angle = 2*Math.PI*nbLivreDisponible(bd)/sizeRayon(bd);

	console.log(angle);

	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x+r, y);
	context.arc(x, y, r, 0 , angle);
	context.lineTo(x, y);
	context.fillStyle='red';
	context.fill();

	context.font = "20px Georgia";
	context.fillStyle='yellow';
	context.fillText("Libre", 70, 150);

	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x+r, y);
	context.arc(x, y, r, 0 , angle, true);
	context.lineTo(x, y);
	context.fillStyle='purple';
	context.fill();

	context.font = "20px Georgia";
	context.fillStyle='pink';
	context.fillText("Empruté", 70, 70);

}

function diagramme(x, y){
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x+(10*2*sizeRayon(bd)), y);
	context.moveTo(x, y);
	context.lineTo(x, y-(10*2*sizeRayon(bd)));
	context.fillStyle='black'
	context.stroke();
}