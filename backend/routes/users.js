import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import validateInput from '../shared/validations/signup';
import bcrypt from 'bcrypt';

const Models = require('../helpers/user');

let router = express.Router();

function validateCredential(data, otherValidations) {
  let { errors } = otherValidations(data);
  return Models.user.find(
  {email: data.email})
 .then(user => {
  if (user.length) {
   if (user[0].email === data.email) {
    errors.email = 'Email is already registered';
    console.log('A user already exist with same credential !');
   }
  }
  return {
   errors,
   isValid: isEmpty(errors)
  }
 });
}

router.get('/:identifier', (req, res) => {
  console.log(req.params.identifier);
    Models.user.find(
  {email: req.params.identifier})
 .then(user => {
   if (user[0].email === req.params.identifier) {
     res.json({ user });
     console.log('User already exist !'+user);
   } else {
     res.end();
   }
 });
});

router.post('/', (req, res) => {
  validateCredential(req.body, validateInput).then(({ errors, isValid}) => {
    if(isValid) {
      //res.json({ success: true });
      const { email, password } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);
      const User = new Models.user({
        email: email,
        password: password_digest
      });
      User.save()
      .then(user => res.json({ success: true }), console.log('User added successfully !'))
      .catch(err => res.status(500).json({ error: err}));
    } else {
      res.status(400).json(errors);
    }
  });
});

export default router;
