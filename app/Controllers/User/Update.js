const { matchedData } = require('express-validator');
const bcrypt = require("bcryptjs");
const UserResource = require("../../Resources/UserResource");

module.exports = async (req, res) => {
    const data = matchedData(req);
    const user = req.user;

    if (data.name) {
        user.name = data.name;
    }

    if (data.password) {
        if (!await bcrypt.compare(data.old_password, user.password)) {
            return res.status(422).json({
                status: "error",
                errors: {
                    old_password: "Old password is wrong!"
                }
            });
        }

        if (await bcrypt.compare(data.password, user.password)) {
            return res.status(422).json({
                status: "error",
                errors: {
                    password: "New password is equal to your old password"
                }
            });
        }

        encryptedPassword = await bcrypt.hash(data.password, 10);
        user.password = encryptedPassword;
    }

    user.save().then(() => {
        return res.json({
            status: "success",
            message: "Recored Updated Successfully.",
            data: UserResource.single(user)
        });
    }).catch(err => {
        return res.status(500).json({
            status: "error",
            message: err.message
        });
    });
}