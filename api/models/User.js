const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email:{
        type: String,
        required: true,
        unique: true, // this is not a validation, this can just optimise the seaching, knowing that an email will exist in DB only once.
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        // match is a validation, and ensures email entered matches the regex provided.
    },
    password: {
        type:String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);