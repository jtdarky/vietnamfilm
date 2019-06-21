/**
 * Created by g62 on 02/03/17.
 */
module.exports = {
    TOKEN_SECRET: process.env.TOKEN_SECRET || 'JWT Token Secret',
    MONGO_URI: process.env.MONGO_URI || 'localhost:27017/filmUser',

    // OAuth 2.0
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || '',
    FOURSQUARE_SECRET: process.env.FOURSQUARE_SECRET || '',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || ''
};