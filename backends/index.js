require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./models/db');

const app = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

const homeRouter = require('./routes/home');
app.use('/home', homeRouter);

// const authRouter = require('./routes/auth');
// app.use('/auth/', authRouter);

const cardRouter = require('./routes/cards');
app.use('/card', cardRouter);

// const accountRouter = require('./routes/account');
// app.use('/account/', accountRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
