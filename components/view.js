

function View(model) {
	this.model = model;
	this.countSubject = new Event();
	this.init();
}

View.prototype = {
	init: function() {
		this.table = this.selector('.table');

		window.addEventListener('load', this.renderTable.bind(this));
		window.addEventListener('click', this.renderTable.bind(this));
		this.model.countSubject.on(() => this.refreshTable());

		return this;
	},

	renderTable: function() {
		if(localStorage.getItem('table')) {
			document.querySelector('.table').addEventListener('click', (e) => {
				if(!e.target.dataset.set) {
					var row = e.target.dataset.row
					var column = e.target.dataset.column
					var table = JSON.parse(localStorage.getItem('table'))

					e.target.dataset.set = true;

					table[row][column] = prompt("Введите значение: ")

					localStorage.setItem('table', JSON.stringify(table))
				}
		})

		this.countSubject.fire();
			
		} else {
			var w = prompt("Введите ширину таблицы(в ячейках): ", '')
			var h = prompt("Введите высоту таблицы(в ячейках): ", '')

			localStorage.setItem('table', JSON.stringify(renderArrayOfTable(w, h)))
		}
	},

	// render table from this.model.table
	refreshTable: function() {
		this.model.getTable()

		var table = document.createElement('table')

		this.table.innerHTML = ''
		
		for(var w = 0; w < this.model.table.length; w++) {
			var tr = document.createElement('tr');
			for(var h = 0; h < this.model.table[w].length; h++) {
				var td = document.createElement('td');
				td.dataset.row = w;
				td.dataset.column = h;
				td.textContent = this.model.table[w][h]
				tr.appendChild(td)
			}
			table.appendChild(tr)
		}

		this.table.appendChild(table)
	},

	// method for search a element in DOM
	selector: function(selector, tobj) {
		let that = document || tobj 

		return that.querySelector(selector)
	}
}




