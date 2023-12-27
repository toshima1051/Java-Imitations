//解説を非表示にさせる 
let element = document.getElementById("kaisetu");

element.style.display = "none";

const pickerOpts = {
	types: [
		{
			//選択できるファイルの制限
			description: 'Text Files',
			accept: {
				'text/csv': ['.csv'],
				'text/plain': ['.txt'],
			},
		},
	],
	excludeAcceptAllOption: true,
	multiple: false,
};
let fileHandle;
let isAnswered1 = false;
let pageLoadTime;

window.onload = function() {
	console.log("Window loaded"); // ページが読み込まれたことを確認
	pageLoadTime = new Date();

	document.getElementById('test-form').addEventListener('submit', async function(event) {
		event.preventDefault();



		if (isAnswered1) {
			alert('すでに回答済みです');
			return;
		}

		const timeBeforeSubmission = new Date();
		const answer1Element = document.querySelector('input[name="answer1"]:checked');

		if (!answer1Element) {
			alert('回答を選択してください');
			return;
		}

		const answer1 = answer1Element.value;

		//ファイルピッカーを開く
		if (!fileHandle) {
			[fileHandle] = await window.showOpenFilePicker(pickerOpts);
		}

		const timeTaken = Math.round((timeBeforeSubmission - pageLoadTime) / 1000); // seconds
		const correctAnswer1 = document.getElementById("correct").value;
		const isCorrect1 = answer1 == correctAnswer1 ? '正解' : '不正解';
		const questionNumber = document.getElementById("question-number").textContent;//問題番号の取得
		const newContents = `${timeBeforeSubmission.toLocaleString()},${questionNumber},${answer1},${isCorrect1},${timeTaken}秒\n`;

		// 正解か不正解かを画面に表示
		// 正解は赤、不正解は青
		var obj = document.getElementById('message');
		obj.textContent = isCorrect1;
		if (isCorrect1 == '正解') {
			obj.style.color = "red";
		} else {
			obj.style.color = "blue";
		}


		try {
			//ファイルの内容を得る
			const file = await fileHandle.getFile();
			const oldContents = await file.text();
			const finalContents = oldContents.includes('回答日時,問題番号,選択した回答,正解不正解,回答までの時間') ? `${oldContents}${newContents}` : `回答日時,問題番号,選択した回答,正解不正解,回答までの時間\n${newContents}`;
			const blob = new Blob([finalContents], { type: 'text/csv;charset=utf-8;' });
			const blobURL = URL.createObjectURL(blob);

			//書き込み先のFileSystemWritableFileStreamを作成する
			//safari, safari on ios, androidでは使えない?
			const writable = await fileHandle.createWritable();
			await fetch(blobURL).then(response => response.blob()).then(async blob => {
				//ファイルの内容をストリームに書き込む
				await writable.write(blob);
				//ファイルを閉じ内容をディスクに書き込む
				await writable.close();
				alert('回答を保存しました');
			});
		} catch (err) {
			console.error('エラーが発生しました：', err);
			obj.textContent = 'エラーが発生しファイルに書き込めませんでした'
		}

		// 回答保存後に回答済みフラグを立てる
		isAnswered1 = true;

		//解説を表示する
		element.style.display = "block";
	});
}

//経過時間の表示
function showClock() {
	const time = new Date();
	const msg = "経過時間：" + Math.round((time - pageLoadTime) / 1000); + " 秒";
	document.getElementById("RealtimeClock").textContent = msg;
}

let timerID = setInterval('showClock()', 1000);

//回答ボタンを押下したら止める
function stop() {
	clearInterval(timerID);
}