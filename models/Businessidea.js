const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const BusinessideaSchema = new Schema({

title: {
   type: String,
   required: true
},

details: {
   type: String,
   required: true
},
date: {
  type: Date,
  default: Date.now
}
});

const Businessidea = mongoose.model('Businessidea',BusinessideaSchema);

module.exports = Businessidea;
