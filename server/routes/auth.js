const path = require('path');
const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/UserModel');

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/callback',
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        const {
          id: googleId,
          displayName: username,
          name: { familyName: lastName, givenName: firstName },
          _json: { email },
        } = profile;
        user = User.create({
          googleId,
          username,
          email,
          firstName,
          lastName,
          ingredients: [],
          favorites: [],
        });
      }
      return done(user);
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
