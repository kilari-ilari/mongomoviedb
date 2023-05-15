// Mongoose:n skeema (schema) määrittää MongoDB-dokumentin rakenteen
// tässä mukana validointi (required ja maxlength)

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MovieSchema = new Schema(
  {
    title: {type: String, required: true, maxlength: 150},
    director: {type: String, required: true, maxlength: 200},
    year: {type: Number, required: true}
  }
);

// Skeema muunnetaan mongoose-malliksi käyttämällä mongoose.model() funktiota. 
// Mallia käytetään MongoDB-tietokannan CRUD-toimintojen kutsumiseen. 

//Export model
module.exports = mongoose.model('Movie', MovieSchema);