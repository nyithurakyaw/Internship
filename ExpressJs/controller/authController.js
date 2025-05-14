const bcrypt = require('bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const dotenv = require('dotenv');
dotenv.config();
const usersDB = {
    users: require('../model/user.json'),
    setUsers:function(data){this.users = data}
}

const handleLogin = async (req,res) => {
    const {userName,password} = req.body;
    try {
        if(!userName || !password)
            return res.status(404).json({message:"User is empty"});
        const user = usersDB.users.find(person => person.userName === userName);
        if(!user)
            return res.status(404).json({message:"User not found"});
        const match = await bcrypt.compare(password,user.password);
        if(!match)
            return res.status(404).json({message:"Password is not match"});
        const accessToken = jwt.sign(
            {"userName":userName},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '2m'}
        );
        const refreshToken = jwt.sign(
            {"userName":userName},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );
        const otherUsers = usersDB.users.filter(person => person.userName !== user.userName);
        const currentUser = {...user,refreshToken};
        usersDB.setUsers([...otherUsers,currentUser]);
        await fs.writeFile(
            path.join(__dirname,'..','model','user.json'),
            JSON.stringify(usersDB.users)
        );
        res.cookie(
            'jwt',refreshToken,
            {
                httpOnly:true,
                sameSite:'None',
                secure:true,
                maxAge:24 * 60 * 60 *1000
            }
        );
        return res.status(200).json({accessToken});
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {handleLogin}