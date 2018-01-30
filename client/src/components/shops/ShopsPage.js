import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShopsList from './ShopsList';
import { fetchShops } from '../../actions/shopsActions';

class ShopsPage extends React.Component {
  componentDidMount() {
    this.props.fetchShops();
  }
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
  shops: PropTypes.array.isRequired,
  fetchShops: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return {
    shops: state.shops
  }
}

export default connect(mapStateToProps, { fetchShops })(ShopsPage);
