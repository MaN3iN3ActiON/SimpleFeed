/*
Define Schema and model
*/
//Require mongoose
const mongoose = require('mongoose');

//Define a Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
	gmail : String
})

// Compile model from UserSchema

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;