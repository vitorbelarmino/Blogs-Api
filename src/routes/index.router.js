const { Router } = require('express');
const { test } = require('../controllers/loginController');
const { loginValidate } = require('../middleware');

const router = Router();

router.post('/login', loginValidate, test);

module.exports = { router };