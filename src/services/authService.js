const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// REGISTER
const register = async (data) => {
    const {name, email, password} = data;

    // Confirming if the user exists
    const existingUser = await User.findOne({email});
    if (existingUser) {
        throw new Error("Huyu msee ako inadi!");
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    return user;
};

// LOGIN
const login = async (data) => {
    const {email, password} = data;

    const user = await User.findOne({email});
    if (!user) {
        throw new Error("Kuna stuff umeweka vibaya!")
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Hizo stuff umetype hapo hazimatch na za db!");
    }

    const token = jwt.sign(
        {id: user._id, role: user.role}, // payload - data inside the token
        process.env.JWT_SECRET,
        {expiresIn: "1d"}
    );

    return {user, token};
};

module.exports = {
    register,
    login
};