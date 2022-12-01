const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StoryStructureSchema = new Schema({
    name: {type: String, trim: true, required: true, maxLength: 100},
    structure: [{type: Schema.Types.ObjectId, ref: "Structure"}],
    themes: [{type: Schema.Types.ObjectId, ref: "Theme"}],
    examples: [{type: String}] 
});


module.exports = mongoose.Model("StoryStructures", StoryStructureSchema);