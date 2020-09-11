//for google auth
const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//to implement google auth
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    // clientID: process.env['GOOGLE_CLIENT_ID'],
    // clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
    // scope: 'profile'
  },
  (accessToken, refreshToken, profile, done) => {

    User.findOne({ googleId : profile.id })
    .then((existingUser) => {
      if(existingUser){
      done(null, existingUser)
    }else{
      new User({ googleId: profile.id })
      .save()
      .then((user)=> done(null, user));
    }
  })
      
  }
));