/*
Baher Saad
2019/3/3
*/
let input = document.getElementById('input'),
btn = document.getElementById('btn'),
goalAdded = document.getElementById('gls'),
glsChild = [...document.getElementById('gls').children],
theGoals = [...document.getElementsByClassName('the-goal')],
lengthGoals = document.getElementById('lengthGolas'),
achive = document.getElementById('achive'),
inputErr = document.getElementById('input-err'),
nums = [],
removed = [];

btn.onclick = function() {
	createElem();
	rempveGoals();
}

function createElem() {
	if (input.value === "") {
		inputErr.textContent = "you have to enter your goals";
	} else {
	var d = document.createElement("div");
	d.textContent = input.value;
	d.classList.add("the-goal");
	goalAdded.append(d);
	input.value = "";
	nums.push(this);
	console.log(nums);
	inputErr.textContent = "";
	}
	
}

function rempveGoals() {
	var cccc = [...goalAdded.children];
	console.log(cccc);
	lengthGolas.textContent = cccc.length + removed.length;
	for (var i = 0; i < cccc.length; i++) {
	cccc[i].onclick = function () {
		this.remove();
		removed.push(this.remove());
		console.log(removed.length);
		achive.textContent = removed.length;
		}
	}
}

(function clickWnClickInput() {
	input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        btn.click();
    }
});
})();
