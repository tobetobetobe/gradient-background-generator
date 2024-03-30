var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function randomHexColor(){
	return "#" + (Math.random() * 0xFFFFFF <<0)
	.toString(16).padStart(6, '0');
}

function setRandomGradient() {
	let col1 = randomHexColor();
	let col2 = randomHexColor();
	body.style.background = 
	"linear-gradient(to right," 
	+ col1 
	+ ", " 
	+ col2
	+ ")";
	color1.value = col1;
	color2.value = col2;
	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);