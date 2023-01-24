const mongoose = require("mongoose")

const PlayListSchema = mongoose.Schema({
  
    title: {
        type:String,
        maxlength:50,
    },
  
    privacy: {
        type: Number,
        default:0
    },
}, { timestamps: true })


const PlayList = mongoose.model('PlayList', PlayListSchema);

module.exports = PlayList 