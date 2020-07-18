const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    name : {
        type : String,
        required : true
    },
    university : {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    atLevel : {
        type : Number,
        ref : "Level",
        default : 0
    },
    lastLevelCrackedAt : {
        type : Date
    }
})

const User = mongoose.model("User",userSchema);

module.exports = User;