var fn = {};

//ページをプッシュします
fn.load = function(page) {
	var content = document.getElementById('myNavigator');
	content.pushPage(page);
};

//動的にリストを読み込み
window.onload = function() {
	var topics = {
		'basic': '基礎',
		'array': '配列',
		'for': 'for文、while文',
		'if': '条件分岐',
		'break': 'break・continue',
		'object': 'オブジェクト指向',
		'exceptions': '例外処理'
		// 他のカテゴリもここに追加
	};

	var categoryList = document.getElementById('category-list');
	for (var topic in topics) {
		var listItem = document.createElement('ons-list-item');
		listItem.setAttribute('tappable', '');
		listItem.setAttribute('onclick', "fn.load('" + topic + ".html')");
		listItem.textContent = topics[topic];
		categoryList.appendChild(listItem);
	}
};
