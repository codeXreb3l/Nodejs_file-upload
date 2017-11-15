
var mongoose = require("mongoose");

var photoSchema = new mongoose.Schema({
    path: String
});

module.exports = mongoose.model("Photo", photoSchema);