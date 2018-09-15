


function renderArrayOfTable(width, height) {
	let arr = [];

	for(let i = 0; i < height; i++) {
		arr.push([])
	}

	for(let h = 0; h < height; h++) {
		arr[h].length = width;
		for(w = 0; w < arr[h].length; w++) {
			arr[h][w] = ''
		}
	}

	return arr;
}