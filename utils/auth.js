
const jwt=require('jsonwebtoken');
 
const ensureAuthenticated=(req,res,next)=>{
    //agar authorization header bheja yaa nhi
    if(!req.headers['authorization']){
        return res.status(403)
            .json({message:'Token is required'});
    }
    try{
        const decoded=jwt.verify(req.headers['authorization'],process.env.SECRET);
        return next();

    }catch(err){
        return res.status(403)
            .json({message:"Token is not valid,or it is expired"});
    }
}
module.exports = {
    ensureAuthenticated
}