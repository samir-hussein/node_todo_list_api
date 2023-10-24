const { check } = require('express-validator');
const User = require("../../Models/User");
const ValidationErrors = require("../../Services/ValidationErrors");

const validator = [
    check('name').notEmpty(),

    check('email').isEmail().withMessage('Not a valid e-mail address').custom(async value => {
        const user = await User.findOne({ email: value });
        if (user) {
            throw new Error('E-mail already in use');
        }
    }),

    check('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/).withMessage('Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character'),

    check('passwordConfirmation').custom((value, { req }) => {
        return value === req.body.password;
    }),

    ValidationErrors.errors
];

module.exports = validator;
