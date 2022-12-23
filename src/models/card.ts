const mongoose = require('mongoose')

export default mongoose.Schema({
    cardholderName:{
        type: String
    },
    expiryMonth: {
        type: Number
    },
    expiryDay: {
        type: Number
    },
    expiryYear: {
        type: Number
    },
    cardNumber: {
        type: String
    },
    cvv: {
        type: Number
    }
})