const schema = require("./zodSchema");
let cheackSpell  = async(req,res,next)=>{
 try{
   let parseBody = await schema.parseAsync({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
   });
   console.log(parseBody);
   next();
}
 catch(error) {
    const message = error.errors[0].message;
    res.status(400).json({message});
}
}


module.exports = cheackSpell;