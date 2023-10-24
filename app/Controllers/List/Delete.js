const List = require("../../Models/List");
const detach = require("../../Services/Detach");

module.exports = async (req, res) => {
    const user = req.user;

    await detach(user, user.lists, req.list);

    List.deleteOne({ _id: req.params.list }).then(() => {
        return res.json({
            status: "success",
            message: "Recored Deleted Successfully."
        });
    }).catch(err => {
        return res.json({
            status: "error",
            message: err.message
        });
    });
}