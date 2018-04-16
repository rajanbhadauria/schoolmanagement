var mongoose = require('mongoose');
//mongoose.set('debug', true);
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    name: String,
    email: String,
    password: String,
    is_active: Boolean,
    is_verified: Boolean
});
var admins = mongoose.model('admins', adminSchema);
var verify_email = new Schema({
    user_id: String,
    token: String
});
var verify_email_model = mongoose.model('verification_email_codes', verify_email);
module.exports = {Admin: admins, VerifyCode: verify_email_model} ;
