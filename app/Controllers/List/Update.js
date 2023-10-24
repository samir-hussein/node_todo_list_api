const { matchedData } = require('express-validator');
const ListResource = require("../../Resources/ListResource");

module.exports = (req, res) => {
    const data = matchedData(req);

    const list = req.list;

    if (data.name) {
        list.name = data.name;
    }

    if (data.description) {
        list.description = data.description;
    }

    if (data.order) {
        list.order = data.order;
    }

    list.save().then(() => {
        return res.json({
            status: "success",
            message: "Recored Updated Successfully.",
            data: ListResource.single(list)
        });
    }).catch(err => {
        return res.status(500).json({
            status: "error",
            message: err.message
        });
    });
}