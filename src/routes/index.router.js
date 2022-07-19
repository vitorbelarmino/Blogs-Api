const { Router } = require('express');
const { loginController } = require('../controllers/loginController');
const controller = require('../controllers/userController');
const { loginValidate, userValidate, tokenValidate } = require('../middleware');

const router = Router();

router
  .post('/login', loginValidate, loginController)
  .post('/user', userValidate, controller.createUser)
  .get('/user', tokenValidate, controller.getAll)
  .get('/user/:id', tokenValidate, controller.getById);

module.exports = { router };