const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/app-database");
const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const user = mongoose.model("user",userSchema);
module.exports = user;