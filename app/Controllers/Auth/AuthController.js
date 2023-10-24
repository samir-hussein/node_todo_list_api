const Register = require("./Register");
const Login = require("./Login");
const Logout = require("./Logout");

const controller = {
    register: (req, res) => Register(req, res),
    login: (req, res) => Login(req, res),
    logout: (req, res) => Logout(req, res)
}

module.exports = controller;