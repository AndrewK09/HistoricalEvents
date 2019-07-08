module.exports = function(req, res, next) {
  if (req.query['events/getall']) {
    res.header('testing', 'test');
  }
  next();
};
