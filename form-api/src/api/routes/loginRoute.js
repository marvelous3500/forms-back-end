
import express from 'express'
const { check, validationResult } = require('express-validator/check');
import * as auth from '../Middleware/auth'
var router = express.Router()

router.post('/', async (req, res) => {
  // [
	// 	check('email', 'Please include a valid email').isEmail(),
	// 	check('password', 'Password is required').exists()
  // ];
  
  let user = {
    username: req.username,
    password: req.password
  }

  await auth.getToken(user)
 
})
export default router
