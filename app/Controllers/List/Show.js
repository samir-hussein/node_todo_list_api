const ListResource = require("../../Resources/ListResource");

module.exports = (req, res) => {
    return res.json({
        status: "success",
        data: ListResource.single(req.list)
    });
}