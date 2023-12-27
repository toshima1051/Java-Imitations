//入力された文字列を複数回表示
function repeatText() {
	var count = document.getElementById('numberSelect').value;
	var text = document.getElementById('textSelect').value;
	var output = '';
	for (var i = 0; i < count; i++) {
		output += text + '<br>';
	}
	document.getElementById('output').innerHTML = output;
}
//i=i表示用
function repeatNum() {
	var count = document.getElementById('numberSelect').value;

	var output = '';
	for (var i = 0; i < count; i++) {
		output += 'i = ' + i + '<br>';
	}
	document.getElementById('output').innerHTML = output;
}

//拡張for文用
function repeatKaku() {
	var count = document.getElementById('numberSelect').value;

	var output = '';
	for (var i = 1; i <= count; i++) {
		output += i ;
	}
	document.getElementById('output').innerHTML = output;
}

//九九、掛け算用、numberSelect1とnumberSelect2で掛け算
function kuku() {
	var count1 = document.getElementById('numberSelect1').value;
	var count2 = document.getElementById('numberSelect2').value;
	
	

	var output = '';
	for (var i = 1; i <= count1; i++) {
		for(var j = 1;j <= count2;j++){
			output += ' ' + i * j ;
		}
		output += '<br>'
	}
	document.getElementById('output').innerHTML = output;
}