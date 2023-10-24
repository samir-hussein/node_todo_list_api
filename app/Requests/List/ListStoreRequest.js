const { check } = require('express-validator');
const ValidationErrors = require("../../Services/ValidationErrors");

const validator = [
    check('name').notEmpty(),

    check('description').notEmpty(),

    check('order').optional().isInt({ min: 1, max: 99 }).withMessage("min value is 1 and max value is 99"),

    ValidationErrors.errors
];

module.exports = validator;
