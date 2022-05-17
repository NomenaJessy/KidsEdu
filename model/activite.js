var mongoose = require('mongoose');

var activiteSchema = new mongoose.Schema({
    categorie: String,
    intitule: String,
    image: String
});

var activite = mongoose.model('Activite',activiteSchema);
module.exports = activite;