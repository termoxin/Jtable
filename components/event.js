
function Event() {
	this.events = [];
}

Event.prototype = {
	on: function (eventCallBack) {
		this.events.push(eventCallBack)
	},

	fire: function (args) {
		for(var i = 0; i < this.events.length; i++) {
			this.events[i](args)
		}
	}
}