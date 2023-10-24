const Auth = require("./auth");
const IsListOwner = require("./isListOwner");
const IsTaskBelongsToList = require("./isTaskBelongsToList");

const middlewares = {
    auth: (req, res, next) => Auth(req, res, next),
    isListOwner: (req, res, next) => IsListOwner(req, res, next),
    isTaskBelongsToList: (req, res, next) => IsTaskBelongsToList(req, res, next),
}

module.exports = middlewares;