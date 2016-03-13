
var mongoose = require('mongoose');


var companySchema= new mongoose.Schema({
	id: String,
	Name: String,
	Author	: String,
	ISBN: Number,
	Condition: Number,
	Price: Number,
	Seller: String,
	Sold: Boolean
});


module.exports = mongoose.model('Company',bookSchema);