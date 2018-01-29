import React, { Component } from 'react';
import { Link, Match } from 'react-router';
import ShopsPage from './components/shops/ShopsPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="shops">shops</Link>

      <Match pattern="/shops" component={ShopsPage} />
      </div>
    );
  }
}

export default App;
