module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    if (!req.user || req.user.email !== 'admin')
      throw new Error('You are not allowed on this page...');

    next();
  } catch (err) {
    err.status = 403;
    next(err);
  }
};
