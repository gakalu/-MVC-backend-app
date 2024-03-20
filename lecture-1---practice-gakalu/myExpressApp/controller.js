
const userModle=require('./modle');

exports.getAll= async (req,res)=>{
const user=await userModle.getuser();
res.send(user);
}
