const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require("./config/keys");
const { session } = require('passport');
const passport = require('passport');
require("./models/User");
require('./services/passport');

// connect to mongo
// Connect to MongoDB using the URI //
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();


app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000
app.listen(PORT);