const { validationResult } = require('express-validator');

exports.errors = (req, res, next) => {
    const errors = validationResult(req).formatWith(error => error.msg).mapped();

    if (Object.keys(errors).length === 0) {
        return next();
    }

    return res.status(422).json({
        status: "error",
        errors: errors
    });
}