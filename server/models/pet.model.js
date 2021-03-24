const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({ //change Thing to Variable
    name: {
        type: String,
        required: [true, "Please provide a name"],
        minlength: [3, "This name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Is this pet a cat or dog?"],
        minlength: [3, "The type must be at least 3 characters"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    }
}, {timestamps: true});
module.exports.Pet = mongoose.model('Pet', PetSchema); //Replace thing with variable