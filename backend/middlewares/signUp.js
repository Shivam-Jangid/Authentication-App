const user = require('../db/user');
const spmiddleware = (req,res,next)=>{
    const email = req.body.email;
    user.findOne({
        email:email
    }).then((value)=>{
        if(value){
            res.status(403).json({
                msg:"user already exists"
            })
        }
        else{
        return next();
        }
    })
}
module.exports = spmiddleware;