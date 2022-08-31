const { Router } = require('express');
const { loginController } = require('../controllers/loginController');
const user = require('../controllers/userController');
const category = require('../controllers/CategoryController');
const {
  loginValidate, userValidate, tokenValidate, categoryValidate, blogPostValidate,
} = require('../middleware');
const blogPost = require('../controllers/BlogPostController');

const router = Router();

router
  .post('/login', loginValidate, loginController)
  .post('/user', userValidate, user.createUser)
  .get('/user', tokenValidate, user.getAll)
  .get('/user/:id', tokenValidate, user.getById)
  .post('/categories', tokenValidate, categoryValidate, category.createCategory)
  .get('/categories', tokenValidate, category.getAll)
  .get('/post', tokenValidate, blogPost.getAll)
  .post('/post', tokenValidate, blogPostValidate, blogPost.createPost);

module.exports = { router };