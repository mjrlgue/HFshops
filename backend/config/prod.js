//prod.js - production keys

module.exports = {

  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET
};
