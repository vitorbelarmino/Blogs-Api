const { Router } = require('express');
const { loginController } = require('../controllers/loginController');
const { userController, getAllController } = require('../controllers/userController');
const { loginValidate, userValidate, tokenValidate } = require('../middleware');

const router = Router();

router
  .post('/login', loginValidate, loginController)
  .post('/user', userValidate, userController)
  .get('/user', tokenValidate, getAllController);

module.exports = { router };