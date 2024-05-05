const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    cin: {
        type: String,
        required: [true, "Please provide a cin"], 
        unique: [true, "User already exists"],
        maxlength: 9,
        minlength: 8,
    },
    name: {
        type: String,
        required: [true, "Please provide a name"],
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: [true, "User already exists"],
        maxlength: 50,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        minlength: 6,
    },
    phoneNumbers: {
        type: [String],
        required: [true, "Please provide a phoneNumber"],
        maxlength: 8,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model("User", UserSchema);