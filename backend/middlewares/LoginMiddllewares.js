const user = require("../db/user");
const loginmw = (req,res,next)=>{
    if(req.body.username && req.body.password)
    {user.findOne({
        username:req.body.username,
        password:req.body.password
    }).then((value)=>{
        if(value){
            return next();
        }
        else{
            res.status(403).json({
                msg:"user not found"
            });
        }
    
    })}
    else {
        // alert("invalid username or password");
        res.status(403).json({
            msg:"invalid username or password"
        });
    }
}

module.exports = loginmw;