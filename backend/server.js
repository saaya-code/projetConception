// Importing dependencies
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');

// Importing the helper functions
const getUserByEmail = require('./helpers/getUserByEmail');
const getUserById = require('./helpers/getUserById');

//Register models
require("./models/User");
require("./models/Region");
require("./models/Service");
require("./models/Workshop");
require("./models/Visit");
require("./models/Service");
require("./models/Vehicule");

const initilizePassport = require('./config/passport.config');
const app = express();
const connectDB = require("./config/db.config");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
initilizePassport(passport, getUserByEmail, getUserById);


app.use(bodyParser.json());
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const checkAdminRights = require("./middleware/checkAdminRights");
const checkAuthenticated = require("./middleware/checkAuthenticated");

//make a router to /api 
app.use("/auth", require("./routers/auth.routes"));
//app.use("/api", require("./routers/main.routes"));
app.use("/admin",checkAuthenticated, checkAdminRights, require("./routers/admin.routes"));





app.listen(PORT, () => {
    connectDB(process.env.mongo_URI);
});