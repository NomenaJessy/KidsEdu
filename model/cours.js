var mongoose = require('mongoose');

var coursSchema = new mongoose.Schema({
    Categorie: String,
    Description: String,
    Image: String
});

const cours = mongoose.model('Cour',coursSchema);
module.exports = cours;