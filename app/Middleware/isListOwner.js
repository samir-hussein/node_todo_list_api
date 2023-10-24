module.exports = async (req, res, next) => {
    const list_id = req.params.list;

    const user_lists = req.user.lists;

    const result = user_lists.find(({ _id }) => _id == list_id);

    if (!result) {
        return res.status(404).json({
            status: "error",
            message: "List Not Found!"
        });
    }

    req.list = result;

    return next();
};