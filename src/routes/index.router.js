const { Router } = require('express');
const { loginController } = require('../controllers/loginController');
const user = require('../controllers/userController');
const category = require('../controllers/CategoryController');
const validate = require('../middleware');
const blogPost = require('../controllers/BlogPostController');

const router = Router();

router
  .post('/login', validate.Login, loginController)
  .post('/user', validate.User, user.createUser)
  .get('/user', validate.Token, user.getAll)
  .get('/user/:id', validate.Token, user.getById)
  .post('/categories', validate.Token, validate.Category, category.createCategory)
  .get('/categories', validate.Token, category.getAll)
  .get('/post', validate.Token, blogPost.getAll)
  .post('/post', validate.Token, validate.BlogPost, blogPost.createPost)
  .get('/post/:id', validate.Token, blogPost.getId)
  .put('/post/:id', validate.Token, validate.EditPost, blogPost.editPost)
  .delete('/post/:id', validate.Token, blogPost.postDelete)
  .delete('/user/me', validate.Token, blogPost.deleteMe);

module.exports = { router };