/**
 * Created by g62 on 28/02/17.
 */
/**
 * Created by g62 on 28/02/17.
 */
// Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var directorSchema = ({
    name:String,
    birthday: String,
    summary: String,
    earlyLife: String,
    awards: String,
    film: String,
    imageS: String,
    imageL: String
});

module.exports = mongoose.model('Director', directorSchema);