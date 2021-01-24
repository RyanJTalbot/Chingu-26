const mongoose = require('mongoose');
require('dotenv').config();

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
};

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			'mongodb+srv://Admin:qwerty12345@cluster0.3o1ym.mongodb.net/test',
			options,
		);
		console.log('MongoDB connected: ', conn.connection.host);
	} catch (err) {
		console.log(err);
	}
};

module.exports = connectDB;
