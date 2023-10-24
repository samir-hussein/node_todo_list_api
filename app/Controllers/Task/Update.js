const { matchedData } = require('express-validator');
const TaskResource = require("../../Resources/TaskResource");
const detach = require("../../Services/Detach");
const List = require("../../Models/List");
const attach = require("../../Services/Attach");

module.exports = async (req, res) => {
    const data = matchedData(req);

    const list = req.list;

    const task = req.task;

    if (data.list_id) {
        await detach(list, list.tasks, task);
        task.list = data.list_id;
        const newList = await List.findById(data.list_id).exec();
        await attach(newList, newList.tasks, task);
    }

    if (data.name) {
        task.name = data.name;
    }

    if (data.description) {
        task.description = data.description;
    }

    if (data.order) {
        task.order = data.order;
    }

    if (data.status) {
        task.status = data.status;
    }

    if (data.start_date) {
        task.start_date = data.start_date;
    }

    if (data.end_date) {
        task.end_date = data.end_date;
    }

    if (data.status && data.status == "in_process" && !data.start_date) {
        task.start_date = new Date();
    }

    if (data.status && data.status == "completed" && !data.start_date && !task.start_date) {
        task.start_date = new Date();
    }

    if (data.status && data.status == "completed" && !data.end_date) {
        task.end_date = new Date();
    }

    task.save().then(() => {
        return res.json({
            status: "success",
            message: "Recored Updated Successfully.",
            data: TaskResource.single(task)
        });
    }).catch(err => {
        return res.status(500).json({
            status: "error",
            message: err.message
        });
    });
}