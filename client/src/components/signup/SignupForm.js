import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    this.setState({ errors: {}, isLoading: true });
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
      () => {},
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="ui one column stackable center aligned page grid">
      <form className="ui form four column twelve wide"
            onSubmit={this.onSubmit}>
        <h1>Join Shop buddy</h1>

        <div className={classnames("field", { 'has-error': errors.email })}>
          <label>Email: </label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
          />
          {errors.email && <span className="help-block">{errors.email}</span>}
        </div>

        <div className={classnames("field", { 'has-error': errors.password })}>
          <label>Password:</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
           />
         {errors.email && <span className="help-block">{errors.password}</span>}
        </div>

        <div className={classnames("field", { 'has-error': errors.passwordConfirmation })}>
          <label>Password Confirmation:</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
           />
         {errors.email && <span className="help-block">{errors.passwordConfirmation}</span>}
        </div>
        <button className="ui button" type="submit" disabled={this.state.isLoading}>Sign up</button>
      </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;
