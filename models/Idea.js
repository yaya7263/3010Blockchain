const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

// Create Schema 

const IdeaSchema = new Schema({
    seller:{
        type: String, 
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
}); 

mongoose.model('ideas', IdeaSchema); 