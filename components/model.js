

class Model {
	constructor() {
		this.table = ''
		this.countSubject = new Event(this)
	}

	renderTable(type) {
		this.countSubject.fire();
	}

	getTable() {
		this.table = JSON.parse(localStorage.getItem('table'));
	}
}
