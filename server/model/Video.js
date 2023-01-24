const mongoose = require("mongoose")





const VideoSchema = mongoose.Schema({
    playlist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PlayList'
    },
    writer: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type:String,
        maxlength:50,
    },
    slug: { 
        type: String, 
        required: true, 
        unique: true 
    },
    description: {
        type: String,
    },
    privacy: {
        type: Number,
    },
    filePath : {
        type: String,
    },
    catogory: String,
    views : {
        type: Number,
        default: 0 
    },
    step: {
        type: Number,
        default:0
    },
    duration :{
        type: String
    },
    thumbnail: {
        type: String
    }
}, { timestamps: true })


const Video = mongoose.model('Video', VideoSchema);

module.exports = { Video }