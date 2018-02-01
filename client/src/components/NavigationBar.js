import React from 'react';

import { Link } from 'react-router';

export default () => {

  return (
    <div className="ui secondary menu right floated">
      <div className="item">
        <button className="ui small white button ">
          <Link to="/signup" className="primary">Signup</Link>
        </button>
      </div>
      <div className="item">
        <button className="ui small white button ">
          <Link to="/login" className="primary">Signup</Link>
        </button>
      </div>
    </div>
  );
}
