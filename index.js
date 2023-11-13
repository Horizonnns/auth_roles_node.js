const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://user-auth:authentification@cluster0.xjl8jgs.mongodb.net/`
		);
		app.listen(PORT, () =>
			console.log(
				`Server started on port ${PORT}`
			)
		);
	} catch (e) {
		console.log(e, 'error');
	}
};

start();
