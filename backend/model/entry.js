const mongoose = require('mongoose');

const entryDataSchema = mongoose.Schema( {
    product: String,
    node: String
});

module.exports = mongoose.model("Product", entryDataSchema);