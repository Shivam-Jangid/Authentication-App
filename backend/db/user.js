require("dotenv").config()
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL);
const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const user = mongoose.model("user",userSchema);
module.exports = user;