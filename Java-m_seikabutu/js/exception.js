//trycatch用
function exception() {
	var index = parseInt(document.getElementById("indexSelect").value);
	var output = document.getElementById("output");

	var myNumbers = [1, 2, 3];
	if (myNumbers[index] == undefined) {
		output.innerHTML = "エラー: 配列の範囲外にアクセスしました。";
	} else {
		output.innerHTML = myNumbers[index];
	}

} 

//trycatch用 finallyあり
function finally_block() {
var index = parseInt(document.getElementById("indexSelect").value);
	var output = document.getElementById("output");

	var myNumbers = [1, 2, 3];
	if (myNumbers[index] == undefined) {
		output.innerHTML = "エラー: 配列の範囲外にアクセスしました。";
	} else {
		output.innerHTML = myNumbers[index];
	}
        output.innerHTML += "<br>finallyブロックが実行されました。";
    
}

