const User = require("../../Models/User");
const bcrypt = require("bcryptjs");
const { matchedData } = require('express-validator');

module.exports = async (req, res) => {
    const data = matchedData(req);

    encryptedPassword = await bcrypt.hash(data.password, 10);

    data.password = encryptedPassword;

    // Create user in our database
    User.create(data).then(() => {
        res.status(201).json({
            status: "success",
            message: "Recored Created Successfully."
        });
    }).catch(err => {
        res.status(500).json({
            status: "error",
            message: err.message
        });
    });
}