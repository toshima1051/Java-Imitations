//		elseも利用した年齢判定用
		function ifelseTextage(){
			var number = document.getElementById('numberSelect').value;
			var output = '';
			if(number>=30){
				output += 'あなたの年齢は30歳以上ですね！';
			}else{
				output += 'あなたの年齢は30歳以上ではありません';
			}
			document.getElementById('output').innerHTML = output;
		}
//		年齢判定用
		function ifTextage(){
			var number = document.getElementById('numberSelect').value;
			var output = '';
			if(number>=30){
				output += 'あなたの年齢は30歳以上ですね！'+'<br>';
			}
				output += '処理を終了します。';
			
			document.getElementById('output').innerHTML = output;
		}
		
//		年齢判定用 else if
		function elseifTextage(){
			var number = document.getElementById('numberSelect').value;
			var output = '';
			if(number>=30){
				output += 'あなたの年齢は30歳以上ですね！'+'<br>';
			}else if(number<=20){
				output += 'あなたの年齢は20歳以下ですね！'+'<br>';
			}
				output += '処理を終了します。';
			
			document.getElementById('output').innerHTML = output;
		}
		
//ifのネスト用
		function ifBlood(){
			var number = document.getElementById('numberSelect').value;
			var blood =  document.getElementById('textSelect').value;
			var output = '';
			if(number>=30){
				if(blood=='A'){
					output += 'あなたの年齢は30歳以上、血液型はA型ですね！'+'<br>';
				}else{
					output += 'あなたの年齢は30歳以上ですね！'+'<br>';
				}
				
			
			}
				output += '処理を終了します。';
			
			document.getElementById('output').innerHTML = output;
		}



