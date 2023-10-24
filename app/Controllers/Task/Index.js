const TaskResource = require("../../Resources/TaskResource");

module.exports = (req, res) => {
    return res.json({
        status: "success",
        data: TaskResource.collection(req.list.tasks)
    });
}