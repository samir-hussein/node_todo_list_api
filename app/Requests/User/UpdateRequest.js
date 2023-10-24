const { check } = require('express-validator');
const ValidationErrors = require("../../Services/ValidationErrors");

const validator = [
    check('name').optional().notEmpty(),

    check('password').optional().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/).withMessage('Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character'),

    check('passwordConfirmation').if(check('password').exists()).custom((value, { req }) => {
        return value === req.body.password;
    }),

    check('old_password').if(check('password').exists()).notEmpty(),

    ValidationErrors.errors
];

module.exports = validator;
