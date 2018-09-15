

class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
		this.init();
	}

	init() {
		this.view.countSubject.on(this.renderTable.bind(this))
	}

	renderTable() {
		this.model.renderTable()
	}
}
