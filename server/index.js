/*
	Entry point for server
*/

/*
Dependecies
- express
- mongoose
*/

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });
const db = mongoose.connection;
db.on('open', () => {
	console.log('db connected');
})
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/login',(req, res) => res.send('login'));
app.get('/users/:userId/' , (req, res) => res.send(req.params));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
