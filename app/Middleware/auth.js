const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const config = process.env;

const verifyToken = async (req, res, next) => {
    let authHeader = req.headers["authorization"] ?? null;

    if (!authHeader) {
        return res.status(401).json({
            status: "error",
            message: "Unauthorized"
        });
    }

    authHeader = authHeader.split(" ");
    const Bearer = authHeader[0] ?? null;
    const token = authHeader[1] ?? null;

    if (Bearer != "Bearer" || !token) {
        return res.status(401).json({
            status: "error",
            message: "Unauthorized"
        });
    }
    try {
        const decoded = jwt.verify(token, config.APP_KEY);
        req.user = await User.findById(decoded.user_id).populate({
            path: "lists",
            options: { sort: { order: 1, createdAt: -1 } },
            populate: {
                path: 'tasks',
                options: { sort: { order: 1, createdAt: -1 } }
            }
        }
        );

        if (req.user.__token != token) {
            return res.status(401).json({
                status: "error",
                message: "Unauthorized"
            });
        }
    } catch (err) {
        return res.status(401).json({
            status: "error",
            message: "Unauthorized"
        });
    }
    return next();
};

module.exports = verifyToken;