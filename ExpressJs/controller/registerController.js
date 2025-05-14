const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs').promises;
const usersDB = {
    users: require('../model/user.json'),
    setUser: function(data){this.users = data}
}

const handleNewUser = async (req,res) => {
    const {userName,password} = req.body;
    if(!userName || !password)
        return res.status(404).json({message:"User data are empty"});
    try {
        const duplicate = usersDB.users.find(person => person.userName === userName);
        if(duplicate)
            return res.json({message:"You cannot duplicate"});
        const hastPassword = await bcrypt.hash(password,10);
        const newUser = {
            userName:userName,
            password:hastPassword
        }
        usersDB.setUser([...usersDB.users,newUser]);
        await fs.writeFile(
            path.join(__dirname,'..','model','user.json'),
            JSON.stringify(usersDB.users)
        );
        res.json({usersDB});
    } catch (error) {
        res.json({message:error.message});
    }
}

module.exports = {handleNewUser}