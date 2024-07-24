const z = require("zod");
const schema = z.object({
    username:z.string({required_error:"username is required"}).trim().min(3).max(25),
    email:z.string({required_error:"email is required"}).email({message:"invalid email address"}),
    password:z.string({required_error:"password is required"}).trim().min(7).max(25)
});

module.exports = schema;