const Index = require("./Index");
const Delete = require("./Delete");
const Update = require("./Update");

const controller = {
    index: (req, res) => Index(req, res),
    delete: (req, res) => Delete(req, res),
    update: (req, res) => Update(req, res)
}

module.exports = controller;