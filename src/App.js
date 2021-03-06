import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import ShopsPage from './components/shops/ShopsPage';
import ShopsForm from './components/shops/ShopsForm';
import NavigationShops from './components/NavigationShops';
import NavigationBar from './components/NavigationBar';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import FlashMessagesList from './components/flash/FlashMessagesList';


class App extends Component {
  render() {
    return (
      <div className="ui container">
        {/*navigation bar*/}
        <div className="ui container">
          <NavigationBar />
        </div>
        <FlashMessagesList />
        <div className="ui three item menu">
          <Link className="item" activeClassName="active" to="/">Home</Link>
          <Link className="item" activeClassName="active" to="shops">Shops</Link>
          <Link className="item" activeClassName="active" to="shops/new">New Shops</Link>

        </div>
        <NavigationShops />

      <Match exactly pattern="/shops" component={ShopsPage} />
      <Match pattern="/shops/new" component={ShopsForm} />
      <Match exactly pattern="/signup" component={SignupPage} />
      <Match exactly pattern="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;
