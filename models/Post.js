const mongoose = require('mongoose');

// --------------------------Set schema for the posts
const postSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {type: String,
    required: true}
});

// In the following line 'Customers' define de collection "customers" in the DB
module.exports = mongoose.model('Customers', postSchema);