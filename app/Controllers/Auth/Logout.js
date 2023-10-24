module.exports = async (req, res) => {
    const user = req.user;

    user.__token = null;
    await user.save();

    return res.json({
        status: "success",
        message: "User logged out successfully.",
    });
}