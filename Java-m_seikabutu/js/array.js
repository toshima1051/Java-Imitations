//		カンマ区切りで配列表示
function repeatArray() {
	var count = document.getElementById('numberSelect').value;
	var output = '[';
	for (var i = 0; i + 1 < count; i++) {
		output += i + ',';
	}
	output += i + ']'
	document.getElementById('output').innerHTML = output;
}
//		配列表示用
function arrayView() {
	var array = document.getElementById('arraySelect').value;
	document.getElementById('output').innerHTML = array;
}

//		配列の画像付き解説用
function changeImageAndText() {
	var count = document.getElementById('numberSelect').value;

	// Generate the array text
	var output = '';
	for (var i = 0; i < count; i++) {
		output += i;
	}

	// Display the array text in the output element
	document.getElementById('output').innerHTML = output;

	// Clear the image container
	var imageContainer = document.getElementById('imageContainer');
	imageContainer.innerHTML = '';

	// Create and display the images in the imageContainer element
	for (var i = 0; i < count; i++) {
		// Create a div element to hold the number, the image, and numberArray[i]
		var divElement = document.createElement('div');
		divElement.className = 'imageBlock';

		// Create a text element with the current number
		var textElement = document.createElement('p');
		textElement.textContent = i;
		divElement.appendChild(textElement);

		// Create an image element
		//				
		var imgElement = document.createElement('img');
		imgElement.src = '../images/box.jpg';
		divElement.appendChild(imgElement);

		// Create a text element with numberArray[i]
		var arrayElement = document.createElement('p');
		arrayElement.textContent = 'numberArray[' + i + ']';
		divElement.appendChild(arrayElement);

		// Add the div element to the image container
		imageContainer.appendChild(divElement);
	}
}