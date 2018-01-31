import React from 'react';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.userSignupRequest(this.state);
  }

  render() {
    return (
      <div className="ui one column stackable center aligned page grid">
      <form className="ui form four column twelve wide"
            onSubmit={this.onSubmit}>
        <h1>Join Shop buddy</h1>

        <div className="field">
          <label>Email: </label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
          />
        </div>

        <div className="field">
          <label>Password:</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
           />
        </div>

        <div className="field">
          <label>Password Confirmation:</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            name="passwordConfirmation"
           />
        </div>
        <button className="ui button" type="submit">Sign up</button>
      </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;
