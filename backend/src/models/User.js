const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
});

module.exports = model('User', userSchema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let User = new Schema({
//     user_firstname: {
//         type: String
//     },
//     user_lastname: {
//         type: String
//     },
//     user_nickname: {
//         type: String
//     },
//     user_password: {
//         type: String
//     }

// });

// module.exports = mongoose.model('User', User);