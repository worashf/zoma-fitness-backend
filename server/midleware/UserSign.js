
const { SUBSCRIBER_SECRET, ADMIN_SECRET } = require('./Config').token;
const jwt = require('jsonwebtoken');

const generateToken = (id, type) => {
    var token;
    if (type === 'ADMIN') {
     token = jwt.sign({id},ADMIN_SECRET)   
    }
    else if (type === 'SUBSCRIBER') {
        Token = jwt.sign({id}, SUBSCRIBER_SECRET)
    }
    
    else {
        Token = null
    }
    return(token===null?{signed:false,token}:{signed:true,token})
}

module.exports = generateToken;