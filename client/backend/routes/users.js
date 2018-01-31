import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import validateInput from '../shared/validations/signup';
import bcrypt from 'bcrypt';

const Models = require('../helpers/user');

let router = express.Router();



router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (isValid) {
    const { email, password } = req.body;
    const password_digest = bcrypt.hashSync(password, 10);
    const User = new Models.user({
      email: email,
      password: password_digest
    });
    User.save()
    .then(user => res.json({ success: true }), console.log('User added successfully !'), console.log('password is: '+ password_digest+'  crypted ^^'))
    .catch(err => res.status(500).json({ error: err}));
  } else {
    res.status(400).json(errors);
  }
});

export default router;
