//四則演算用
function arithmetic() {
	var answer = document.getElementById('arithmeticSelect').value;
	var output = 0;
	switch (answer) {
		case "0":
			output += (10+2);
			break;

		case "1":
			output += (10-2);
			break;

		case "2":
			output += (10*2);
			break;

		case "3":
			output += (10/2);
			break;

		case "4":
			output += (10%2);
			break;
	}

	document.getElementById('output').innerHTML = output;
}
//足し算
function sum() {
    var num1 = document.getElementById('numberSelect1').value;
    var num2 = document.getElementById('numberSelect2').value;
    var addAns = Number(num1) + Number(num2);
    document.getElementById('output').innerHTML = "答えは" + addAns + "です。";
}
//シンプルに出力するだけ
function output(){
	var text = document.getElementById('textSelect').value;
	document.getElementById('output').innerHTML = text;
}
//インクリメント用
function increment() {
  var select1 = document.getElementById("incrementSelect1");
  var select2 = document.getElementById("incrementSelect2");
  var selectedValue1 = select1.options[select1.selectedIndex].value;
  var selectedValue2 = select2.options[select2.selectedIndex].value;
  var output = document.getElementById("output");
  var a = 1;
  output.innerHTML = a + "<br>";
  if (selectedValue1 == "1") {
    a++;
  } else if (selectedValue1 == "2") {
    a--;
  }
  output.innerHTML +=  a + "<br>";
  if (selectedValue2 == "1") {
    a++;
  } else if (selectedValue2 == "2") {
    a--;
  }
  output.innerHTML += a;
}
//前置後置インクリメント用
function increment2() {
  var select1 = document.getElementById("incrementSelect1");
  var select2 = document.getElementById("incrementSelect2");
  var select3 = document.getElementById("incrementSelect3");
  var selectedValue1 = select1.options[select1.selectedIndex].value;
  var selectedValue2 = select2.options[select2.selectedIndex].value;
  var selectedValue3 = select3.options[select3.selectedIndex].value;
  var output = document.getElementById("output");
  var a = 1;
  if (selectedValue1 == "1") {
    output.innerHTML = a++ + "<br>";
  } else if (selectedValue1 == "2") {
    output.innerHTML = ++a + "<br>";
  }else if (selectedValue1 == "0") {
	  output.innerHTML =  a + "<br>";
  }
  
  if (selectedValue2 == "1") {
    output.innerHTML += a++ + "<br>";
  } else if (selectedValue2 == "2") {
    output.innerHTML += ++a + "<br>";
  }else if (selectedValue2 == "0") {
	  output.innerHTML +=  a + "<br>";
  }
  
    if (selectedValue3 == "1") {
    output.innerHTML += a++ + "<br>";
  } else if (selectedValue3 == "2") {
    output.innerHTML += ++a + "<br>";
  }else if (selectedValue3 == "0") {
	  output.innerHTML +=  a + "<br>";
  }
  
}