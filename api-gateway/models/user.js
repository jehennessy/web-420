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

module.exports = mongoose.model('User', userSchema);

/*
 * Database queries 
 */