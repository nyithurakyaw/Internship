const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const usersDB = {
    users: require('../model/user.json'),
    setUsers:function(data){this.users = data}
}

const refreshHandleLogin = async (req,res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt)
        return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    try {
        if(!userName || !password)
            return res.status(404).json({message:"User is empty"});
        const user = usersDB.users.find(person => person.userName === userName);
        if(!user)
            return res.status(404).json({message:"User not found"});
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err,encoded)=>{
                if(err || encoded.userName !== user.userName)
                    return res.sendStatus(403);
                const accessToken = jwt.sign(
                    {"userName":encoded.userName},
                    process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn:'30s'}
                )
                res.json({accessToken});
            }           
        );
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {refreshHandleLogin}