const express = require('express');
const jwt = require("jsonwebtoken");
const jtwpass = "Shivam123";
const User = require("./db/user");
const spmiddleware = require("./middlewares/signUp");
const cheackSpell = require("./middlewares/correctValidation");
const loginmw = require("./middlewares/LoginMiddllewares");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/signup",cheackSpell,spmiddleware,async (req,res)=>{
    const user = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    try{
        const user_password = {
            username:req.body.username,
            email:req.body.email
        }
        user.save().then(()=>{
            const token = jwt.sign({user_password},jtwpass,{expiresIn:"3h"});
            res.json({
                user:user_password,
                token
            });
        });
        
    } 
    catch(err){
        res.status(500).json({
            msg:err
        });
    }
})
app.post("/login",loginmw, async(req,res)=>{
    const loginUser = await User.findOne({
        username:req.body.username,
        password:req.body.password
    });
    const LoginUser = {
        username:loginUser.username,
        email:loginUser.email
    }
    const token = jwt.sign({LoginUser},jtwpass,{expiresIn:"3h"});
    res.json({
        user:LoginUser,
        token:token
    })
});
app.post("/AddSkill",(req,res)=>{
    
});

app.listen (3000, () => {
  console.log(`Example app on on port ${3000}`)
})