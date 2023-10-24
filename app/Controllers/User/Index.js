const UserResource = require("../../Resources/UserResource");

module.exports = (req, res) => {
    return res.json({
        status: "success",
        data: UserResource.single(req.user)
    });
}