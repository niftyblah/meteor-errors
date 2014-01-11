Errors = {
	collection: new Meteor.Collection(null),

	throw: function(message, type) {
		type = type || "danger";
		Errors.collection.insert({ message: message, type: type, seen: false });
	},
	clearSeen: function() {
		Errors.collection.remove({seen: true});
	},
	cleanAll: function() {
		Errors.collection.remove({});
	}
};