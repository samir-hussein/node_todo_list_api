const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');
mongoose.plugin(mongoosePaginate);

module.exports = mongoose;