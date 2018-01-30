import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

export default function ShopsList({ shops })  {
  const emptyMessage = (
    <p>There are no shops yet in your collection :/.</p>
  );

  const shopsList = (
    <div className="ui four cards">
      { shops.map(shop => <ShopCard shop={shop} key={shop._id} /> ) }
    </div>
  );
  return (
    <div>
      {shops.length === 0 ? emptyMessage : shopsList}
    </div>
  );
}

ShopsList.propTypes = {
  shops: PropTypes.array.isRequired
}
