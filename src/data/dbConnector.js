const mongoose = require('mongoose');
const userSchema = require('./userSchema.js');
const movieSchema = require('./movieSchema.js');

/**
 * Mongoose Connection
**/

mongoose.connect('mongodb://localhost:27017/graphqlTutorial', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

const Users = mongoose.model('Users', userSchema);
const Movies = mongoose.model('Movies', movieSchema);

module.exports = { Users, Movies };