const { default: userEvent } = require('@testing-library/user-event');
const { body, validationResult } = require('express-validator');
const express= require('express');
 const User = require('../models/User');
const router=express.Router();
router.post('/',[body('name').isLength({ min: 3 }),
body('password').isLength({ min: 5 }),
body('email').isEmail()],
(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

})
module.exports=router