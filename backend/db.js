const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://premcellendula:YD8kZCioZ5pKYbfr@cluster0.sur9all.mongodb.net/paytm-uttidhe")

const userSchema = {
    username: {
        type: String,
        minLength: 8,
        maxLength: 50,
        trim: true,
        unique: true,
        required: true,
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
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    }
}

const bankSchema = new mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = mongoose.model('User', userSchema)
const Account = mongoose.model('Account', bankSchema)

module.exports = {
    User,
    Account
}