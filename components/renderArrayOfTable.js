


function renderArrayOfTable(width, height) {
	var arr = [];

	for(var i = 0; i < height; i++) {
		arr.push([])
	}

	for(var h = 0; h < height; h++) {
		arr[h].length = width;
		for(w = 0; w < arr[h].length; w++) {
			arr[h][w] = ''
		}
	}

	return arr;
}