const User =require('../model/User')
const generateToken = require('../midleware/UserSign')
const bcrypt = require('bcrypt');


// signup controller

exports.SignUp = (req, res) => {
    const { firstname, lastname, email,phone, password, type } = req.body;
    //find if the user is exist
    User.findOne({ email }).exec(async (err, user) => {
        if (user) {
            return res.status(400).json({
                err: "User already registered",
                user: user
            })
        }
        const hash_password = await bcrypt.hash(password, 10);
    
        const _user = new User({
            firstname, lastname, email,phone,hash_password, type
        })
    
        _user.save((err, user) => {
            if (err) {
                return res.status(400).json({
                    err:"shome thing went wrong"
                })
            }
            if (user) {
                const token = generateToken(user._id, user.type);
                return res.status(201).json({
                    token,
                    user
                })
            }
        })
        
    })
 


}

// user login controller
exports.LogIn = async(req, res) => {
    const { phone ,password} = req.body;
    const user = await User.find({ phone });
    if (user.length=== 0) {
        let secure = { login: false, error:false, message: 'sorry unknown phone' }
        res.status(400).send(secure) 
    } else {
        const { _id,firstname,lastname, fullname, email, phone, hash_password: psw, type } = user[0]
        const compare = await bcrypt.compare(password, psw);
        if (compare) {
            const { signed, token } = generateToken(_id, type);
            if (!signed)
                throw new error('authenticating with token failed')
            //encrypting response
            let data = {
                login: true, error:false, token, message: 'welcome', 
                type, id: _id ,firstname,lastname,fullname
            }
            //sending response
            res.send(data)
        }
        else {
            //sending error when password don't match
            let secured = { login: false, error:false, message: "Invalid password" }
            res.status(200).send(secured)
        }
    }

}