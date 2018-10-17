const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;
// This might not be necessary if I can store block directly?
// Create Schema 
/*
var currentDate = new Date();
this.timestamp = currentDate.getTime();
this.item = arguments[0];

this.previousHash = "0"; 
this.seller = arguments[1]; 
this.hash = this.calculateHash();
*/

const BlockSchema = new Schema({
    seller:{
        type: String, 
        required: true
    },
    itemProductName: {
        type: String,
        required: true
    },
    itemProductPrice: {
        type: String,
        required: true
    },
    itemProductWebsite: {
        type: String,
        required: true
    },
    previousHash: {
        type: String, 
        required: false
    }
}); 

mongoose.model('blocks', BlockSchema); 