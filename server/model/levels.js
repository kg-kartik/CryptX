const mongoose = require("mongoose");
const schema = mongoose.Schema;

const levelSchema = new schema({
    _id : {
        type : Number
    },
    question : {
        type : String,
        required : true
    },
    hint : {
        type : String,
        required : true
    },
    answer :  {
        type : String,
        required : true
    }
})

const Level = mongoose.model("Level",levelSchema);

module.exports = Level;