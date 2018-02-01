import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class NavigationShops extends React.Component {
  render() {

      const { isAuthenticated } = this.props.auth;
      const userLinks = (
        <div>
        <br/>
          <div className="ui buttons right floated">
            <button className="ui button">Nearby Shops</button>
            <div className="or"></div>
            <button className="ui positive button">My Preferred Shops</button>
          </div>
          <br/><br/>
        </div>
      );

      const guestLinks = (
        <div>
        <br/>
          <div className="ui buttons right floated">
            <button className="ui button">NOT_LOGGED_IN</button>
            <div className="or"></div>
            <button className="ui positive button">NOT_LOGGED_IN</button>
          </div>
          <br/><br/>
        </div>
      );
    return (
      <div>
          { isAuthenticated ? userLinks : guestLinks}
        </div>
    );
  }
}

NavigationShops.propTypes = {
  auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(NavigationShops);
