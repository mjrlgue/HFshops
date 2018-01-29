import React from 'react';
import { connect } from 'react-redux';
import ShopsList from './ShopsList';

class ShopsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Shops page</h1>

        <ShopsList shops={this.props.shops} />
      </div>
    );
  }
}

ShopsPage.propTypes = {
  shops: React.PropTypes.array.isRequired
}


function mapStateToProps(state) {
  return {
    shops: state.shops
  }
}

export default connect(mapStateToProps)(ShopsPage);
