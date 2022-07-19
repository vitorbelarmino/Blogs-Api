require('dotenv/config');

const jwt = require('jsonwebtoken');
const { CustomError } = require('./CustomError');

const validateToken = (token) => {
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    console.log(error);
    throw new CustomError(401, 'Expired or invalid token');
  }
};

module.exports = { validateToken };