import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import ShopsPage from './components/shops/ShopsPage';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" activeClassName="active" to="/">Home</Link>
          <Link className="item" activeClassName="active" to="shops">Shops</Link>
          <Link className="item" activeClassName="active" to="shops/new">New Shops</Link>

        </div>

      <Match pattern="/shops" component={ShopsPage} />
      </div>
    );
  }
}

export default App;
