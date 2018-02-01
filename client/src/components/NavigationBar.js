import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';


class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
      const { isAuthenticated } = this.props.auth;

      const userLinks = (
      <div className="ui secondary menu right floated">
        <div className="item">
          <button className="ui small white button ">
            <Link to="/shops" className="primary">Shops</Link>
          </button>
        </div>
        <div className="item">
          <button className="ui small white button ">
            <a href="#" className="primary" onClick={this.logout.bind(this)}>Logout</a>
          </button>
        </div>
      </div>
  );

      const guestLinks = (
      <div className="ui secondary menu right floated">
        <div className="item">
          <button className="ui small white button ">
            <Link to="/signup" className="primary">Signup</Link>
          </button>
        </div>
        <div className="item">
          <button className="ui small white button ">
            <Link to="/login" className="primary">Login</Link>
          </button>
        </div>
      </div>
      );

    return (
      <div>
        { isAuthenticated ? userLinks : guestLinks }
      </div>
    );
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}


export default connect(mapStateToProps, { logout })(NavigationBar);
