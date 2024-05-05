const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    vehicule: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicule',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status:{
        type: String,
        enum: ["pending", "confirmed", "canceled"],
        default: "pending",
    },
    services:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Service',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Visit', visitSchema);