const Joi = require('joi');

const userSchema = Joi.object({
  
  displayName: Joi.string().min(8).required().messages({
    'any.required': 'Name is required',
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
      'any.required': '"email" must be a valid email',
      
    }),
  password: Joi.string().min(6).required().messages({
      'any.required': 'Some required fields are missing',
      'string.min': '"password" length must be at least 6 characters long',
    }),
  image: Joi.string().required(),
});

module.exports = { userSchema };