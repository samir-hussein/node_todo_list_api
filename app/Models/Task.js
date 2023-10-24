const mongoose = require("../../config/mongoose");

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    order: { type: Number, default: 100 },
    status: { type: String, default: "pending" },// [pending, in_process, completed, canceled]
    start_date: { type: Date, default: null },
    end_date: { type: Date, default: null },
    list: { type: mongoose.Schema.Types.ObjectId, ref: 'List' }
}, {
    timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);