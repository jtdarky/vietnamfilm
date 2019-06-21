/**
 * Created by g62 on 28/02/17.
 */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var productSchema = ({
    product: String,
    price: Number,
    summary: String,
    sale: String,
    size: String,
    imageS: String,
    imageL: String,
});


module.exports = mongoose.model('Products', productSchema);
