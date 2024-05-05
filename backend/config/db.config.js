const mongoose = require('mongoose');

module.exports = function(mongoURI){
    mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
        console.log('Server is running on port 3000');
    })
    .catch((error) => {
        console.error(error);
    });
}