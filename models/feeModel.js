var mongoose = require('mongoose');
//mongoose.set('debug', true);
var Schema = mongoose.Schema;

var feeStructureSchema = new Schema({
    item_name: String,
    item_amount: String,
    is_deleted: Boolean,
});
var fee_structure = mongoose.model('fee_structure', feeStructureSchema);

var sessionSchema = new Schema({
    session_title: String,
    sort_by: Number
});

var sessionModel = mongoose.model('school_sessions',sessionSchema);

module.exports = {feeStructure: fee_structure, sessionModel: sessionModel} ;