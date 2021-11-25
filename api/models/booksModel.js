'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BooksSchema = new Schema({
    Author: {
        type: String,
        required: 'Mandatory'
    },
    Title: {
        type: String,
        required: 'Mandatory'
    },
    ISBN: {
        type: String,
        required: 'Mandatory'
    },
    Release_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Books', BooksSchema);