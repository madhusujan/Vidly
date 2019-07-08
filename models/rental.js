const Joi  = require('joi');
const mongoose = require('mongoose');

const Rental = mongoose.model('Rental', new mongoose.Schema({
    customer:{
        type: new mongoose.Schema({
            name:{
                type: String,
                required: true, 
                min: 5, 
                max: 50
            },
            isGold:{
                type: Boolean, 
                retuired: true
            },
            phone:{
                type: Number, 
                required:true, 
                min: 5,
                max: 25
            }
        }),
        required: true
    },
    movie: {
        type: new mongoose.Schema({
            title:{
                type: String, 
                required: true, 
                min: 5, 
                max: 250
            },
            rentalRate:{
                type: Number, 
                required:true, 
                min:0,
                max: 250
            }
        }),
        required: true
    },
    checkedOut:{
        type: Date, 
        requried: true,
        default: Date.now
    },
    checkedIn:{
        type: Date, 
    },
    rentalFee:{
        type: Number, 
        min:0
    }
}));

function validateRental(rental){
    const schema = {
        customerId: Joi.objectId().required(),
        movieId: Joi.objectId().required()
    };
    return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validate = validateRental;