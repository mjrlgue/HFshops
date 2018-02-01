const mongoose   = require('mongoose');

const { Schema } = mongoose; // =const Schema = mongoose.Schema;
const userSchema = new Schema({
    email   : String,
    password: String
});
//load model users to mongoose
mongoose.model('users', userSchema);
module.exports.userSchema = userSchema;
