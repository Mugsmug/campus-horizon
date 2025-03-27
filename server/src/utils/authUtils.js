const jwt = require("jsonwebtoken");
// const secretKey = require("../configuration/jwtConfig");
// const user = require("../models/User");
const { generateSecretKey } = require("../configuration/jwtConfig");

function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    };

    const secretKey = generateSecretKey(); // Replace with your actual secret key
    console.log('secretKey---', secretKey)
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
console.log('token---', token)
    return token;
}

function generateRefreshToken(user){
    const payload ={
        id: user._id,
        email: user.email,
        role: user.role

    };
    return jwt.sign(payload,secretKey,{expiresIn:"5h"});

};

function verifyToken(token){
    return jwt.verify(token,secretKey);
}

module.exports = {generateToken,generateRefreshToken,verifyToken};

