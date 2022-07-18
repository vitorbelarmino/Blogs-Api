const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().min(1).required()
    .messages({
      'string.min': 'Some required fields are missing',
      'any.required': 'Some required fields are missing',
    }),
    password: Joi.string().min(6).required()
      .messages({
        'string.min': 'Some required fields are missing',
        'any.required': 'Some required fields are missing',
      }),
});

module.exports = { loginSchema };