const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
	category: String,
	cardName: String,
	description: String,
	icon: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

module.exports = mongoose.model('Card', cardSchema);
