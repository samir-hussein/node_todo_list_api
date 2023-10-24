const mongoose = require("../../config/mongoose");

const listSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    order: { type: Number, default: 100 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
}, {
    timestamps: true
});

module.exports = mongoose.model("List", listSchema);