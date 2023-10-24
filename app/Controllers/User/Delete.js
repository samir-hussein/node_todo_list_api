const User = require("../../Models/User");

module.exports = (req, res) => {
    User.deleteOne({ email: req.user.email }).then(() => {
        return res.json({
            status: "success",
            message: "Recored Deleted Successfully."
        });
    }).catch(err => {
        return res.status(500).json({
            status: "error",
            message: err.message
        });
    });
}