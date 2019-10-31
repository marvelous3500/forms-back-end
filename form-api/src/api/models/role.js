const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
	
	role: {
		type: String,
		required: true
	},
	datecreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('role', UserSchema);
