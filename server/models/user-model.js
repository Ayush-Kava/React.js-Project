const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required:true
    }
})

const userModel = mongoose.model("user-data2",userSchema);

module.exports = { userModel };