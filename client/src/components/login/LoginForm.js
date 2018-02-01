import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../shared/validations/login';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';



class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
        this.setState({ errors: {}, isLoading: true });
        this.props.login(this.state).then(
          (res) => this.context.router.history.push('/'),
          (err) => this.setState({ errors: err.response.data.errors, isLoading: false})
        );
    }

  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

render() {
  const { errors, identifier, password, isLoading } = this.state;

  return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        
        <TextFieldGroup
          field="identifier"
          label="Email: "
          value={identifier}
          error={errors.identifier}
          onChange={this.onChange}
        />

        <TextFieldGroup
          field="password"
          label="Password: "
          value={password}
          error={errors.password}
          onChange={this.onChange}
          type="password"
        />

        <div className="ui form"><button className="ui button" disabled={isLoading}>Login</button></div>
      </form>
    );
  }
}


LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
