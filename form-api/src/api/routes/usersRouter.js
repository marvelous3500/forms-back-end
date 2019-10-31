import * as userController from '../controller/userController'
import * as auth from '../Middleware/auth'
import Joi from 'joi'
import { userSchema as userValidate } from '../Middleware/userValidate'
import express from 'express'
const { check, validationResult } = require('express-validator/check');
var router = express.Router()


router.get('/get-user-by-username/:username', async (req, res) => {
  let { username } = req.params

  try {

    const result = await userController.getUserByUserName(username)
    res.status(200).json(result)

  } catch (error) {
    return res.status(404).json({message: "User not found"})
  }

})

router.post('/', async (req, res) => {
  
  const user = {

    username: req.body.username,
    email: req.body.email,
    password: req.body.password,

  }

  try {

    const addeduser = await userController.addUser(user)
    res.status(201).json(addeduser)
    
  } catch (error) {
    return res.status(400).json({message: "Bad request"})
  }
})

router.get('/', async (req, res, next) => {

  const getAlluser = await userController.getAllUsers()
  res.status(200).json(getAlluser)

})

router.get('/get-user-by-id/:_id', async (req, res, next) => {
  
  try {

    let { _id } = req.params
    let user = await userController.getUserById(_id);
    res.status(200).json(user)

  } catch (error) {
    res.status(404).json({message:"User not found"})
  }

})


router.delete('/:_id', async (req, res) => {
  try {

    let { _id } = req.params
    await userController.delectUser(_id)
    res.status(200).json({ message: ' successful' })

  } catch (error) {
    return res.status(404).json({message: " User not found"})
  }
})

router.put('/:_id', async (req, res) =>{

  try {

    let { _id } = req.params;
    let user = req.body;
    let updatedUser = await userController.updateUser(_id, user)
    res.status(200).json(updatedUser);

  } catch (error) {
    return res.status(400).json({message :"Bad request"});

  }
})

  
  router.get('/search', async (req, res) =>{

    try {

      let param = req.params;
      let user = await userController.updateUser(param)
      res.status(200).json(user);
  
    } catch (error) {
      return res.status(404).json({ message: ' User not found' });
    }
    
})

export default router
