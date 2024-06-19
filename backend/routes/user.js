const express = require('express')
const zod = require('zod');
const { User } = require('../db');
const {JWT_SECRET} = require('../config');
const jwt = require('jsonwebtoken')
const router = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    username: zod.string(),
    lastname: zod.string()
})

router.post('/signup', async (req, res) => {
    const {success} = signupBody.safeParse(req.body)

    if(!success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username,
    })

    if(existingUser){
        res.status(411).json({
            message: "Email already taken/ User already exists"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    })

    const userID = user._id

    const token = jwt.sign({
        userID
    }, JWT_SECRET)

    res.json({
        message: "User created successfully",
        token: token
    })
})

const signinBody = {
    usernmae: zod.string().email(),
    password: zod.string().min(6)
}

router.post('/signin', async (req, res) => {
    const {success} = signinBody.safeParse(req.body)

    if(!success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)

        res.json({
            token
        })

        return
    }

    res.status(411).json({
        message: "Error while logging in"
    })


})

module.exports = router