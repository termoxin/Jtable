
class Event {

	constructor() {
		this.events = [];
	}

	on(eventCallBack) {
		this.events.push(eventCallBack)
	}

	fire(args) {
		for(let i = 0; i < this.events.length; i++) {
			this.events[i](args)
		}
	}
}