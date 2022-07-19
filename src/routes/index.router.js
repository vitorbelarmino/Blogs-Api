const { Router } = require('express');
const { loginController } = require('../controllers/loginController');
const { userController } = require('../controllers/userController');
const { loginValidate, userValidate } = require('../middleware');

const router = Router();

router
  .post('/login', loginValidate, loginController)
  .post('/user', userValidate, userController);

module.exports = { router };