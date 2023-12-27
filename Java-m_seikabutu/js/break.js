//break文用
function breakif() {
	var num = document.getElementById('numberSelect').value;

	var output = '';
	for (var i = 0; i < 10; i++) {
		output += i ;
		if(i>=num){
			break;
		}
	}
	document.getElementById('output').innerHTML = output;
}

//continue用
function continueif() {
	var num = document.getElementById('numberSelect').value;

	var output = '';
	for (var i = 1; i < 20; i++) {
		
		if(i % num == 0 ){
			continue;
		}
		output += i + "/";
	}
	document.getElementById('output').innerHTML = output;
}