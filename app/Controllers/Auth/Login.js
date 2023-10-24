const User = require("../../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserBasicResource = require("../../Resources/UserBasicResource");
const { matchedData } = require('express-validator');

module.exports = async (req, res) => {
    const data = matchedData(req);

    const user = await User.findOne({ email: data.email });

    if (!await bcrypt.compare(data.password, user.password)) {
        return res.status(401).json({
            status: "error",
            message: "Invalid Credentials"
        });
    }

    const token = jwt.sign(
        { user_id: user._id, email: user.email },
        process.env.APP_KEY,
        {
            expiresIn: "2h",
        }
    );

    user.__token = token;
    await user.save();

    return res.json({
        status: "success",
        message: "User logged in successfully.",
        token,
        expiresIn: '2h',
        data: UserBasicResource.single(user)
    });
}