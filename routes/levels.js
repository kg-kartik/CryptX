const express = require("express");
const router = express.Router();
const Level = require("../model/levels");
const User = require("../model/user");
const requireLogin = require("../middleware/requireLogin");
const multer = require("multer");
const path = require("path");

//File Storage Config
const storageDir = path.join(__dirname, "backend", "../..", "public");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, storageDir);
    },
    filename: (req, file, cb) => {
        console.log(file, "hello");
        cb(null, +Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage,
}).single("file");

//Posting the levels data to the db
router.post("/postLevel", upload, (req, res) => {
    const url = req.protocol + "://" + req.get("host");

    const { _id, hint, answer } = req.body;

    const newLevel = new Level({
        _id,
        question: url + "/public/" + req.file.filename,
        hint,
        answer,
    });

    newLevel
        .save()
        .then((savedLevel) => {
            res.status(200).json(savedLevel);
        })
        .catch((err) => {
            res.status(400).json({
                err,
            });
        });
});

//Get current level of a user
router.get("/getCurrentLevel", requireLogin, (req, res) => {
    User.findById(req.user._id)
        .populate("atLevel", ["_id", "hint", "question"])
        .then((level) => {
            res.status(200).json(level);
        })
        .catch((err) => {
            res.json({
                err: "Sorry, There was an error showing your current level",
            });
        });
});

//Checking answer of the level
router.post("/answer", requireLogin, (req, res) => {
    const { answer } = req.body;

    User.findById(req.user._id)
        .populate("atLevel", ["_id", "answer"])
        .then((level) => {
            //Checking for the answer
            if (answer === level.atLevel.answer) {
                User.findByIdAndUpdate(
                    req.user._id,
                    {
                        $set: {
                            atLevel: level.atLevel._id + 1, //Updating level
                            lastLevelCrackedAt: Date.now(), //Updating the time of last cracked level
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                )
                    .populate("atLevel", ["_id", "hint", "question"])
                    .then((newLevel) => {
                        res.status(200).json(newLevel);
                    });
            } else {
                res.status(400).json({
                    errors: [{ msg: "Incorrect answer" }],
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
});

//Fectching users to be displayed on the leaderboard
router.get("/getlevels", (req, res) => {
    User.find({})
        .sort({ atLevel: -1, lastLevelCrackedAt: 1 })
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/getdate", (req, res) => {
    var g1 = new Date(2021, 4, 15, 18, 0, 0);
    var g2 = new Date();

    if (g1.getTime() < g2.getTime()) {
        res.status(200).json({
            bool: false,
        });
    } else {
        res.status(200).json({
            bool: true,
        });
    }
});

module.exports = router;
