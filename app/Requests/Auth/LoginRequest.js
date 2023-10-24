const { check } = require('express-validator');
const User = require("../../Models/User");
const ValidationErrors = require("../../Services/ValidationErrors");

const validator = [
    check('email').notEmpty().custom(async value => {
        const user = await User.findOne({ email: value });
        if (!user) {
            throw new Error('E-mail is wrong!');
        }
    }),

    check('password').notEmpty(),

    ValidationErrors.errors
];

module.exports = validator;
