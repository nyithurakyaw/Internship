const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs').promises;
dotenv.config();
const usersDB = {
    users: require('../model/user.json'),
    setUsers:function(data){this.users = data}
}

const handleLogout = async (req,res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt)
        return res.sendStatus(403);
    const refreshToken = cookies.jwt;
    try {
        const user = usersDB.users.find(person => person.refreshToken === refreshToken);
        if(!user){
            res.clearCookie('jwt',{ 
                httpOnly: true, 
                sameSite: 'None', 
                secure: true 
            });
            return res.status(404).json({message:"User not found"});
        }
        const otherUsers = usersDB.users.filter(person => person.refreshToken !== user.refreshToken);
        const currentUser = {...user,refreshToken:''};
        usersDB.setUsers([...otherUsers,currentUser]);
        await fs.writeFile(
            path.join(__dirname,'..','model','user.json'),
            JSON.stringify(usersDB.users)
        );
        res.clearCookie('jwt',{
            httpOnly:true,
            sameSite:"None",
            secure:true
        });
        res.sendStatus(204);
    } catch (error) {
        res.json(error.message)
    }
}

module.exports = {handleLogout}