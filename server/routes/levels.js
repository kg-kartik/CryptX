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

//Get current level
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

//Answer
router.post("/answer",requireLogin,(req,res) => {
    const {answer} = req.body;

    User.findById(req.user._id)
    .populate("atLevel",["_id","answer"])
    .then((level) => {
        if(answer === level.atLevel.answer) {
            User.findByIdAndUpdate(req.user._id,{
                $set : {
                    atLevel : level.atLevel._id+1
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

module.exports = router;