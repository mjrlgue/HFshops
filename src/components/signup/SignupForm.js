import React from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import history from '../../history';
import isEmpty from 'lodash/isEmpty';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
      invalid: false
    }

    this.onChange        = this.onChange.bind(this);
    this.onSubmit        = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
  const { errors, isValid } = validateInput(this.state);

  if(!isValid){
    this.setState({ errors });
  }
  return isValid;
}

checkUserExists(e) {
  const field = e.target.name;
   const val = e.target.value;
   if (val !== '') {
     this.props.isUserExists(val).then(res => {
       let errors = this.state.errors;
       let invalid;
       if (res.data.user) {
         errors[field] = 'There is user with such ' + field;
         invalid = true;
       } else {
         delete errors[field];
         invalid = false;
       }
       this.setState({ errors, invalid: !isEmpty(errors) });
     });
   }
}

  onSubmit(e) {
    e.preventDefault();
    if(this.isValid()){
        this.setState({ errors: {}, isLoading: true });
        this.props.userSignupRequest(this.state)
        .then(() => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Signed up successfully. Welcome buddy !'
          });
          history.push('/');
          window.location.reload();
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="ui one column stackable center aligned page grid">
      <form className="ui form four column twelve wide"
            onSubmit={this.onSubmit}>
        <h1>Join Shop buddy</h1>

          <TextFieldGroup
          error={errors.email}
          label="email"
          onChange={this.onChange}
          checkUserExists={this.checkUserExists}
          value={this.state.email}
          field="email"
        />

          <TextFieldGroup
            error={errors.password}
            label="Password:"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
            type="password"
          />

            <TextFieldGroup
              error={errors.passwordConfirmation}
              label="Password Confirmation:"
              onChange={this.onChange}
              value={this.state.passwordConfirmation}
              field="passwordConfirmation"
              type="password"
            />


          <button className="ui button" type="submit" disabled={this.state.isLoading || this.state.invalid}>Sign up</button>
      </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SignupForm;
