/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:  12 May 2019
; Modified By: Jordan Hennessy
; Description: User Model
;===========================================
*/

/*
 * Fields username, password and email
 */

var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

const User = module.exports = mongoose.model('User', userSchema);

/*
 * Database queries 
 */

 // user.save is used to add a new user in our database
 module.exports.add = (user, callback) => {
     user.save(callback);
 };

 // get by id
 module.exports.getById = (id, callback) => {
     var query = {_id: id};
     User.findById(query, callback);
 };

 // get by email
 module.exports.getOne = (e, callback) => {
     var query = {email: e};
     User.findOne(query, callback);
 };
 
