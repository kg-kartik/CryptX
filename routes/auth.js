const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const requireLogin = require("../middleware/requireLogin");
const { body, validationResult } = require("express-validator");
const { route } = require("./levels");
const { sendMail } = require("../helpers/sendMail");
const { randomString } = require("../helpers/randString");

require("dotenv").config();
const secret = process.env.JWT_SECRET;

router.get("/getDetails", requireLogin, (req, res) => {
    User.findById(req.user._id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(401).json(err);
        });
});

router.post(
    "/signup",
    [
        body("name", "Please provide a valid name").not().isEmpty(),
        body("university", "Please provide university name").not().isEmpty(),
        body("email", "Please provide a valid email address").isEmail(),
        body(
            "password",
            "Please provide a password altleast 6 characters long"
        ).isLength({ min: 6 }),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, university, email, password } = req.body;

        //Checking if the user is already signed up or not
        User.findOne({
            email,
        }).then((user) => {
            if (user) {
                return res.status(400).json({
                    errors: [{ msg: "Email already exists" }],
                });
            }

            const uniqueString = randomString();
            console.log(uniqueString, "string");
            const isValid = false;

            //If not save the new User
            bcrypt.hash(password, 10).then((hashedPass) => {
                const newUser = new User({
                    isValid,
                    uniqueString,
                    name,
                    university,
                    email,
                    password: hashedPass,
                });

                newUser
                    .save()
                    .then((saveduser) => {
                        res.status(200).json(saveduser);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });

            sendMail(email, uniqueString);
            // res.redirect("back");
        });
    }
);

router.post(
    "/signin",
    [
        body("email", "Please provide a valid email address").isEmail(),
        body("password", "Please provide a password").not().isEmpty(),
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        //Checking if the user has registered or not

        User.findOne({
            email,
        }).then((user) => {
            if (!user) {
                return res.status(400).json({
                    errors: [{ msg: "User not registered" }],
                });
            }

            if (!user.isValid) {
                console.log(user.isValid, "lol");
                return res.status(400).json({
                    errors: [{ msg: "Please verify your email." }],
                });
            }

            bcrypt
                .compare(password, user.password)
                .then((isMatch) => {
                    if (isMatch) {
                        //If password matches then issue a token depending upon the payload given
                        const token = jwt.sign(
                            {
                                _id: user._id,
                            },
                            secret
                        );

                        const { _id, email, password } = user;
                        res.json({
                            token,
                            user: { _id, email, password },
                        });
                    } else {
                        return res.status(400).json({
                            errors: [{ msg: "Invalid Credentials." }],
                        });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
);

//Verification
router.get("/verify/:uniqueString", (req, res) => {
    const { uniqueString } = req.params;
    //CHeck if any user has the particular string
    const user = User.findOne({
        uniqueString,
    });

    if (user) {
        //Verify the user
        User.findOneAndUpdate(
            {
                uniqueString,
            },
            {
                isValid: true,
            },
            {
                new: true,
                runValidators: true,
            }
        ).then((user) => {
            console.log(user);
        });

        res.redirect("http://cryptxmuj.tech/signin");
    } else {
        console.log("User not found");
        res.json("User not found");
    }
});
module.exports = router;
