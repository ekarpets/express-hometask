const createError = require('http-errors');

module.exports.validateTags = (req, res, next) => {
  if(!Array.isArray(req.body)) {
    next(createError(422, 'Unprocessable Entity: The data should be in array format'));
  }

  next();
}
