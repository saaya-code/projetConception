const mongoose = require('mongoose');

const vehiculeSchema = new mongoose.Schema({
    marque: {
        type: String,
        required: true
    },
    modele: {
        type: String,
        required: true
    },
    annee: {
        type: Number,
        required: true  
    },
    couleur: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Vehicule', vehiculeSchema);