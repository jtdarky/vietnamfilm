/**
 * Created by g62 on 28/02/17.
 */
// Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var filmSchema = ({
    categoryId: Number,
    genre: String,
    title:String,
    director: String,
    rating: Number,
    releaseDate: String,
    summary: String
});

module.exports = mongoose.model('Film', filmSchema);