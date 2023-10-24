const Index = require("./Index");
const Store = require("./Store");
const Show = require("./Show");
const Update = require("./Update");
const Delete = require("./Delete");

const controller = {
    index: (req, res) => Index(req, res),
    store: (req, res) => Store(req, res),
    show: (req, res) => Show(req, res),
    update: (req, res) => Update(req, res),
    delete: (req, res) => Delete(req, res)
}

module.exports = controller;