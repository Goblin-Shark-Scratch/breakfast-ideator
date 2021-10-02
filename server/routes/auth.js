const path = require('path');
const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { userInfo } = require('os');

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/callback',
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      let customer = await Customer.findOne({ googleId: profile.id });
      if (!customer) {
        res.locals.isNewCustomer = true;
        const {
          id: googleId,
          displayName: username,
          name: { familyName: lastname, givenName: firstname },
          _json: { email },
        } = profile;
        customer = Customer.create({
          googleId,
          username,
          email,
          firstname,
          lastname,
        });
      }
      return done(err, customer);
    }
  )
);

router.get('/login', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../../client/login.html'));
});

router.get('/logout', (req, res) => {
  res.status(200).send();
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;
