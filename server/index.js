/*
	Entry point for server
*/

/*
Dependecies
- express
- mongoose
*/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');


const port = 3000;

// connect to mongoDB
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });
const db = mongoose.connection;
db.on('open', () => {
	console.log('db connected');
})

// apply body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use routes defined in router.js
app.use('/',router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
