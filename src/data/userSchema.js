const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    id: {
        type: Number
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    favoriteMovies: {
        type: Array
    },
    token: {
        type: Number
    }
});