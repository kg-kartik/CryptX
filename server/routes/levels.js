const express = require('express');
const router = express.Router();
const Level = require("../model/levels");
const User = require("../model/user");
const requireLogin = require("../middleware/requireLogin");

//Posting the levels data to the db
router.post("/postLevel",(req,res) => {
    const {_id,question,hint,answer} = req.body;

    const newLevel = new Level({
        _id,
        question,
        hint,
        answer    
    })

    newLevel.save()
    .then((savedLevel) => {
        res.status(200).json(savedLevel);
    }).catch((err) => {
        res.status(401).json({
            error : "Error saving the level"
        })
    })
})

//Get current level of a user
router.get("/getCurrentLevel",requireLogin,(req,res) => {
    User.findById(req.user._id)
    .populate("atLevel",["_id","hint","question"])
    .then((level) => {
        res.status(200).json(level)
    }).catch((err) => {
        res.json({
            err : "Sorry, There was an error showing your current level"
        });
    })
})

//Checking answer of the level
router.post("/answer",requireLogin,(req,res) => {
    const {answer} = req.body;

    User.findById(req.user._id)
    .populate("atLevel",["_id","answer"])
    .then((level) => {
        //Checking for the answer
        if(answer === level.atLevel.answer) {
            User.findByIdAndUpdate(req.user._id,{
                $set : {
                    atLevel : level.atLevel._id+1, //Updating level
                    lastLevelCrackedAt : Date.now() //Updating the time of last cracked level
                }
            },{
                new : true,
                runValidators : true
            }).populate("atLevel",["_id","hint","question"])
            .then((newLevel) => {
                res.status(200).json(newLevel);
            }).catch((err) => {
                res.status(401).json({
                    error : err
                })
            })
        }
        else {
            res.status(401).json({
                error : "Sorry, Incorrect answer"
            })
        }
    })
})   

//Fectching users to be displayed on the leaderboard
router.get("/leaderboard",(req,res) => {
    User.find({})
    .sort({user : 1,lastLevelCrackedAt : 1})
    .then((users) => {
        res.status(200).json(users);
    }).catch((err) => {
        res.status(401).json(err);
    })
})

module.exports = router;