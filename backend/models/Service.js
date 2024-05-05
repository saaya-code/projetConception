const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    basePrice: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    
});

module.exports = mongoose.model('Service', serviceSchema);