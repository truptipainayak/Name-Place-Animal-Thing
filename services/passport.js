//for google auth
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users');


//can be copied from passport website too 
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//to implement google auth can be copied from passport website too 
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true 
    // clientID: process.env['GOOGLE_CLIENT_ID'],
    // clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    // scope: 'profile'
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
      return done(null, existingUser);
    }

    const user = await new User({ googleId: profile.id }).save();
    done(null, user);
  }
)
);