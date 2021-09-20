const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String
    },
    directorId: {
        type: Number
    },
    year: {
        type: Number
    }
});