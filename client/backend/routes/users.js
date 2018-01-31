import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();


function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid Email';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }

  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required';
  }

  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Password must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }
});

export default router;
