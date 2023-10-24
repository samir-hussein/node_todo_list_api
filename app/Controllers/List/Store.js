const List = require("../../Models/List");
const { matchedData } = require('express-validator');
const ListResource = require("../../Resources/ListResource");
const attach = require("../../Services/Attach");

module.exports = async (req, res) => {
    const data = matchedData(req);
    let user = req.user;

    data.user = user._id;

    // Create list in our database
    List.create(data).then(async result => {
        await attach(user, user.lists, result);

        return res.status(201).json({
            status: "success",
            message: "Recored Created Successfully.",
            data: ListResource.single(result)
        });
    }).catch(err => {
        return res.status(400).json({
            status: "error",
            message: err.message
        });
    });
}