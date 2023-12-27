var dispSubBox = function(subId) {
	[...document.querySelectorAll(".subbox2")].forEach(function(elm) {
		elm.style.display = elm.id === subId ? "inline" : "none"
	});
}
dispSubBox(); // 一致する id がないので全て 非表示になる。

// 1. select.subbox の操作で値が変わると発火するイベント
document.getElementById("cate").addEventListener("change", function(event) {
	var elm = event.target; // select#id になる。
	dispSubBox(elm.value); // 全更新：一致idだけ表示
	
	//一度選ぶと選択不可になるし、選択肢もみえない
	//document.getElementById("cate").disabled = true;
});

const btn4Text = document.getElementById('btntrans-text');
const btn4 = document.getElementById('btntrans');

btn4.addEventListener('click', () => {
	btn4Text.classList.remove('hidden');
	btn4Text.classList.add('popup-message');
});

btn4Text.addEventListener('animationend', () => {
	btn4Text.classList.remove('popup-message');
	btn4Text.classList.add('hidden');
});
//一度選ぶと選択不可になるけど、選択肢は見える
/*function disableOptions(select) {
    for (let i = 0; i < select.options.length; i++) {
      select.options[i].disabled = true;
    }
    select.options[select.selectedIndex].disabled = true;
  }*/