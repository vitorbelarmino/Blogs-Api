const JWT = require('jsonwebtoken');

require('dotenv').config();

const tokenGenerate = (info) => {
  const generate = JWT.sign(info, process.env.JWT_SECRET, {
  expiresIn: '30d',
  algorithm: 'HS256',
  });
  return generate;
};

module.exports = { tokenGenerate };