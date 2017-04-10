var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var contactSchema= new Schema({
  contact:{type: String,  unique:true},
  number:{type: String, required: true},
 });

module.exports=contactSchema;