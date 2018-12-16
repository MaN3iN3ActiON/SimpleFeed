/*
 Entry Point for defining routes
*/
const express = require('express');
const router = express.Router();
const User = require('./userModel'); 
router
	.get('/', (req, res) => {
		User.find({name : 'siva'}, (err, users) => {
			res.json(users);
		})
	})
	.post('/login',(req, res) => {
		const user = new User(req.body);
		user.save();
		res.status(201).send(user);
	})
.get('/users/:userId/' , (req, res) => {
	User.findById(req.params.userId, (err,user) => {
		res.json(user);
	})
});
module.exports = router;