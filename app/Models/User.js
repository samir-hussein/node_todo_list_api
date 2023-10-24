const mongoose = require("../../config/mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    __token: { type: String },
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);