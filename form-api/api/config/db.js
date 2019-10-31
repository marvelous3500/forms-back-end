const mongoose = require('mongoose');

const connectDB = async () => {
	const db =  "mongodb+srv://admin:admin@cluster0-omdrj.mongodb.net/test?retryWrites=true&w=majority"
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
