const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://premcellendula:YD8kZCioZ5pKYbfr@cluster0.sur9all.mongodb.net/paytm-uttidhi")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 12,
        maxLength: 50,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    },
    firstname: {
        type: String,
        trim: true,
        required: true,
        maxLength: 30
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
        maxLength: 30
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}