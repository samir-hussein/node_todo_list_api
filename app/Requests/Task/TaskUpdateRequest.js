const { check } = require('express-validator');
const ValidationErrors = require("../../Services/ValidationErrors");

const validator = [
    check('name').optional().notEmpty(),

    check('description').optional().notEmpty(),

    check('order').optional().isInt({ min: 1, max: 99 }).withMessage("min value is 1 and max value is 99"),

    check('status').optional().isIn(['pending', 'in_process', 'completed', 'canceled']),

    check('start_date').optional().isISO8601().toDate(),

    check('end_date').optional().isISO8601().toDate(),

    check("list_id").optional().custom((value, { req }) => {
        return req.user.lists.find(({ _id }) => _id == value);
    }),

    ValidationErrors.errors
];

module.exports = validator;
