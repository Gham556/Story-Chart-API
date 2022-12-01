const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StructuresSchema = new Schema({
    name: {type: String, required: true, trim: true, maxLength: 100},
    description: {type: String, trim: true, maxLength: 300}
});


module.exports = mongoose.Model("Structures", StructuresSchema);