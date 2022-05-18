var mongoose = require('mongoose');

var activiteSchema = new mongoose.Schema({
    intitule: String
});

var activite = mongoose.model('Activite',activiteSchema);
module.exports = activite;