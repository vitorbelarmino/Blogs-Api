const { Router } = require('express');
const { loginController } = require('../controllers/loginController');
const user = require('../controllers/userController');
const category = require('../controllers/CategoryController');
const { loginValidate, userValidate, tokenValidate, categoryValidate } = require('../middleware');

const router = Router();

router
  .post('/login', loginValidate, loginController)
  .post('/user', userValidate, user.createUser)
  .get('/user', tokenValidate, user.getAll)
  .get('/user/:id', tokenValidate, user.getById)
  .post('/categories', tokenValidate, categoryValidate, category.createCategory)
  .get('/categories', tokenValidate, category.getAll);

module.exports = { router };