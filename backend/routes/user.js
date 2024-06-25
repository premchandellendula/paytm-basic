const express = require('express');
const zod = require('zod');
const { User, Account } = require('../db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const { authMiddleware } = require('../middleware');

const router = express.Router();

const signupBody =  zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    firstname: zod.string(),
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
        username: req.body.username
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

    const userId = user._id

    await Account.create({
        userId,
        balance: 1 + Math.random()*10000
    })


    const token = jwt.sign({
        userId
    }, JWT_SECRET)

    res.json({
        message: "User created successfully",
        token
    })
})


const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6)
})

router.post('/signin', async (req, res) => {
    const {success } = signinBody.safeParse(req.body)

    if(!success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username
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


const updateBody = zod.object({
    password: zod.string().min(6).optional(),
    firstname: zod.string().optional(),
    lastname: zod.string().optional()
})

router.put('/', authMiddleware, async (req, res)=> {
    const {success} = updateBody.safeParse(req.body)

    if(!success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    await User.updateOne({
        _id: req.userId
    }, req.body)

    res.json({
        message: "User updated successfully"
    })
})

router.get('/users', async (req, res) => {
    const filter = req.query.filter || "";


    const users = await User.find({
        $or: [{
            firstname: {
                $regex: filter
            }
        },{
            lastname: {
                $regex: filter
            }
        }]
    })

    res.json({
        users: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })
})

module.exports = router;