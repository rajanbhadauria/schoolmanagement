var mongoose = require('mongoose');
//mongoose.set('debug', true);
var Schema = mongoose.Schema;

var feeStructureSchema = new Schema({
    item_name: String,
    item_amount: String,
    is_deleted: Boolean,
});
var fee_structure = mongoose.model('fee_structure', feeStructureSchema);

module.exports = {feeStructure: fee_structure} ;