const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

router.post("/login", passport.authenticate('local', { failureFlash: true }), (req,res) => {
    try{
        res.status(200).send("Authenticated successfully");
    } catch (error) {
        res.status(500).send(error);
    }
});

router.delete("/logout", (req,res) => {
    req.logOut(err=>console.log(err));
    res.status(200).send("Logged out successfully");
});

router.post("/register", async (req,res) => {
    try {
        const user = new User({
            email: req.body.email,
            password: req.body.password,
            role: req.body.role || 'user',
            name: req.body.name,
            phone: req.body.phone,
            cin: req.body.cin
        });
        await user.save();
        res.status(200).send("User registered successfully");
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;