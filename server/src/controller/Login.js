const bcrypt = require("bcrypt");
const User = require("../models/User");

const {generateToken} = require("../utils/authUtils");

async function login(req, res){
    try{debugger;
        const {email, password} = req.body;
        const user = await User.findOne({email});
        
        if(!user){
            throw new Error("User not found");
        }
        const isPasswordValid = await bcrypt.compare(password ,user.password);
       
        if(!isPasswordValid){
            throw new Error("Invalid password");
        }
        const token = generateToken(user);
        res.status(200).json({user: user, token: token});
    } catch(error){debugger
        res.status(401).json({message: "Invalid credentials !!!"})
    }
}

module.exports = {login};

