(function() {
	var colors = document.getElementsByName('color');
	var powers = document.getElementsByName('power');
	var drive = document.getElementsByName('drive');
	var package = document.getElementsByName('package');
	for (var i = 0; i < colors.length; i++) {
		colors[i].onclick = function() {
			document.getElementById('color').innerText = this.value;
			updateResult();
		}
	}
	for (var i = 0; i < powers.length; i++) {
		powers[i].onclick = function() {
			document.getElementById('power').innerText = this.value;
			updateResult();
		}
	}
	for (var i = 0; i < drive.length; i++) {
		drive[i].onclick = function() {
			document.getElementById('drive').innerText = this.value;
			updateResult();
		}
	}
	for (var i = 0; i < package.length; i++) {
		package[i].onclick = function() {
			document.getElementById('package').innerText = this.value;
			updateResult();
		}
	}
})();

function updateResult() {
	let base = 1000;
	let first = document.querySelector('#color').innerHTML;
	let second = document.querySelector('#power').innerHTML;
	let third = document.querySelector('#drive').innerHTML;
	let forth = document.querySelector('#package').innerHTML;
	let result = parseInt(base) + parseInt(first) + parseInt(second) + parseInt(third) + parseInt(forth);
	document.getElementById("total_bill").innerHTML = result;
}
document.getElementById("total_bill").innerHTML = 1000;