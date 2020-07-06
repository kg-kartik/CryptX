const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../config/keys").JWT_SECRET;
const requireLogin = require("../middleware/requireLogin");

router.get('/getDetails',requireLogin,(req,res) => {
    User.findById(req.user._id)
    .then((user) => {
        res.status(200).json(user);
    }).catch((err) => {
        res.status(401).json(err);
    })
})

router.post('/signup',(req,res) => {
    const {name,university,email,password} = req.body;
    if(!name || !university || !email || !password){
        return res.status(422).json({
            error : "Please fill all the fields"
        })
    }
    
    //Checking if the user is already signed up or not
    User.findOne({
        email
    }).then((user) => {
        if (user) {
            return res.status(422).json({
                error : "User with that Email already exists"
            })
        }

    //If not save the new User 
    bcrypt.hash(password,10).then((hashedPass) => {
        const newUser = new User({
            name,
            university,
            email,
            password : hashedPass
        })
    
        newUser.save()
        .then((saveduser) => {
            res.status(200).json(saveduser);
        }).catch((err) => {
            console.log(err);
        }).catch((err) => {
            console.log(err);
        })
    })
    })
})


router.post('/signin',(req,res) => {
    const {email,password} = req.body;
    
    if(!email || !password) {
        return res.status(422).json({
            error : "Please fill all the fields"
        })
    }

    //Checking if the user has registered or not
    User.findOne({
        email
    }).then((user) => {

        if(!user) {
            return res.status(422).json({
                error : "Student with this email is not present"
            })
        }

        bcrypt.compare(password,user.password)
        .then((isMatch) => {
            if(isMatch) { 
                //If password matches then issue a token depending upon the payload given
                const token = jwt.sign({
                    _id : user._id
                },secret)
                
                const {_id,email,password} = user;
                res.json({
                    token ,
                    user : {_id,email,password}
                })
            }
            else {
                res.json({
                    error : "Sorry Incorrect Email/Password"
                })
            }
        }).catch((err) => {
            console.log(err);
        })
    })
})

module.exports = router;