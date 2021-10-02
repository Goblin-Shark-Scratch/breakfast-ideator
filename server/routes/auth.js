const path = require('path');
const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/UserModel');

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    console.log(err);
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = User.findById(id);
    done(null, user);
  } catch (err) {
    console.log(err);
  }
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/callback',
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          const {
            id: googleId,
            displayName: username,
            name: { familyName: lastName, givenName: firstName },
            _json: { email },
          } = profile;
          user = await User.create({
            googleId,
            username,
            email,
            firstName,
            lastName,
            ingredients: [],
            favorites: [],
          });
        }
        return done(null, user);
      } catch (err) {
        console.log(err);
        return done(err);
      }
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
    res.send(req.user);
  }
);

module.exports = router;
