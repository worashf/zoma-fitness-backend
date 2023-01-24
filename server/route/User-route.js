const express = require('express');
const { SignUp,LogIn } = require('../controller/User-controller');
const router = express.Router();


router.post('/signup' ,SignUp);


router.post('/login' ,LogIn);





module.exports= router;