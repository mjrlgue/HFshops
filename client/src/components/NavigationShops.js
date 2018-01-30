import React from 'react';

class NavigationShops extends React.Component {
  render() {
    return (
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
  }
}

export default NavigationShops;
