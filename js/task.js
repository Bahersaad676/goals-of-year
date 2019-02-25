let input = document.getElementById('input'),
btn = document.getElementById('btn'),
goalAdded = document.getElementById('gls'),
glsChild = [...document.getElementById('gls').children],
theGoals = [...document.getElementsByClassName('the-goal')],
lengthGoals = document.getElementById('lengthGolas');
btn.onclick = function() {
	var d = document.createElement("div");
	d.textContent = input.value;
	d.classList.add("the-goal");
	goalAdded.append(d);
	input.value = "";
	rempveGoals();
	
}
function rempveGoals() {
	var cccc = [...goalAdded.children];
	console.log(cccc);
	lengthGolas.textContent = cccc.length;
	for (var i = 0; i < cccc.length; i++) {
	cccc[i].onclick = function () {
		this.remove();
		}
	}
}