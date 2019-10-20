const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    any: Schema.Types.Mixed 
})

questionSchema.set('collection','douknw');

module.exports = Question = mongoose.model('douknw',questionSchema);