const Task = require("../../Models/Task");
const { matchedData } = require('express-validator');
const TaskResource = require("../../Resources/TaskResource");
const attach = require("../../Services/Attach");

module.exports = async (req, res) => {
    const data = matchedData(req);
    const list = req.list;

    data.list = list._id;

    if (data.status && data.status == "in_process" && !data.start_date) {
        data.start_date = new Date();
    }

    if (data.status && data.status == "completed" && !data.start_date) {
        data.start_date = new Date();
    }

    if (data.status && data.status == "completed" && !data.end_date) {
        data.end_date = new Date();
    }

    // Create list in our database
    Task.create(data).then(async result => {
        await attach(list, list.tasks, result);

        return res.status(201).json({
            status: "success",
            message: "Recored Created Successfully.",
            data: TaskResource.single(result)
        });
    }).catch(err => {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    });
}