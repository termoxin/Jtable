

function Model() {
	this.table = ''
	this.countSubject = new Event(this)
}

Model.prototype = {
	renderTable: function(type) {
		this.countSubject.fire();
	},

	getTable: function() {
		this.table = JSON.parse(localStorage.getItem('table'));
	}
}
