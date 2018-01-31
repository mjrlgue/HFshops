const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = require('../models/User');
mongoose.connect(keys.mongoURI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function(callback){
  console.log("Connection to database Succeeded.");
});

const user = mongoose.model("user", User.userSchema);

module.exports.user = user;
