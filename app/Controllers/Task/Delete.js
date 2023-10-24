const Task = require("../../Models/Task");
const detach = require("../../Services/Detach");

module.exports = async (req, res) => {
    const list = req.list;

    await detach(list, list.tasks, req.task);

    Task.deleteOne({ _id: req.params.task }).then(() => {
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