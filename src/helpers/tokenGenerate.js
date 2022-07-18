const JWT = require('jsonwebtoken');

require('dotenv').config();

const tokenGenerate = (info) => {
  const generate = JWT.sign({ data: info }, process.env.JWT_SECRET, {
  expiresIn: '1d',
  algorithm: 'HS256',
  });
  return generate;
};

module.exports = { tokenGenerate };