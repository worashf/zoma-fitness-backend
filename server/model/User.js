const mongoose = require('mongoose');

const saltRounds = 10;
const jwt = require('jsonwebtoken');
const nanoid =require( 'nanoid')
const userSchema = mongoose.Schema({
   
    firstname: {
        type:String,
        maxlength:50
    },
    lastname: {
        type:String,
        maxlength: 50
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    phone: {
        type:String,
        trim:true,
        unique: 1 
    },
    hash_password: {
        type: String,
        minglength: 5
    },
 
    type: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "ADMIN",
      },
},
{ timestamps: true })
userSchema.virtual('fullname')
    .get(function () {
    return `${this.firstname } ${this.lastname}`
})
const User = mongoose.model('User', userSchema);

module.exports = User 