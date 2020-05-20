
function component(){
	
	const elem = document.createElement("h1");
	elem.textContent = "Hello World!";
	document.body.appendChild(elem);
	
}

window.addEventListener('DOMContentLoaded', (event) => {
    component();
});