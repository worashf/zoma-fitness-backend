const mongoose = require("mongoose")

const SubscriberSchema = mongoose.Schema({
  
    subscriber_name: {
        type:String,
        maxlength:50,
    },
  
    phone_number: {
        type: Number,
    },
    status: {
        type: Number,
        default:1
},
}, { timestamps: true })


const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

module.exports = { Subscriber }