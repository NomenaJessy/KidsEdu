var mongoose = require('mongoose');

var utilisateurSchema = new mongoose.Schema({
    Nom: String,
    nomUtilisateur: String,
    DateNaissance: Date,
    Mail: String,
    MotDePasse : String
});
utilisateurSchema.DateNaissance instanceof Date;

const utilisateur = mongoose.model('Utilisateur',utilisateurSchema);
module.exports = utilisateur;