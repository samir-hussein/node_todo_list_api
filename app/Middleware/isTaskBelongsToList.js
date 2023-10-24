module.exports = async (req, res, next) => {
    const list = req.list;

    const task = list.tasks.find(({ _id }) => _id == req.params.task);

    if (!task) {
        return res.status(404).json({
            status: "error",
            message: "Task Not Found!"
        });
    }

    req.task = task;

    return next();
};