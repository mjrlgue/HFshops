import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export default function validateInput(data) {
  let errors = {};

  if(Validator.isEmpty(data.email)){
    errors.email = 'Email is required !';
  }
  if(!Validator.isEmail(data.email)){
    errors.email = "Email is invalid";
  }
  if(Validator.isEmpty(data.password)){
    errors.password = 'Password is required !';
  }
  if(Validator.isEmpty(data.passwordConfirmation)){
    errors.passwordConfirmation = 'Password Confirmation is required !';
  }
  if(!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = "Password does not match !";
  }
  return{
    errors,
    isValid: isEmpty(errors)
  }
}
