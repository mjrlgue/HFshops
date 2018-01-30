import React from 'react';
import PropTypes from 'prop-types';

export default function ShopsList({ shops })  {
  const emptyMessage = (
    <p>There are no shops yet in your collection :/.</p>
  );

  const shopsList = (
    <p>shops list goes here !</p>
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
