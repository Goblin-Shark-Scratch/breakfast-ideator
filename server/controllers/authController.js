//useful, but currently unused
const authController = {
  sessionRequired: (req, res, next) => {
    if (!req.user) return res.redirect('/auth/login');
    next();
  },
};

module.exports = authController;
