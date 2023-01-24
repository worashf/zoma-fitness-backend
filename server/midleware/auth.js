const jwt = require('jsonwebtoken')
const { SUBSCRIBER_SECRET, ADMIN_SECRET } = require('./Config').token



const subscriberAuth = (req, res, next) => {

}


const adminAuth = (req, res, next) => {
    
    try {
    
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, ADMIN_SECRET)
        req.user = user;
        next()
     
    }
    catch (err) {
        
    }
       
}

module.exports = {
    subscriberAuth, adminAuth
}