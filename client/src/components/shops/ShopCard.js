import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCard({ shop }) {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{shop.name}</div>
      </div>
      <div className="image">
        <img src={shop.picture} alt={shop.name} />
      </div>
    </div>
  );
}


ShopCard.propTypes = {
  shop: PropTypes.array.isRequired
}


// {
//     "_id": {
//         "$oid": "5a0c6711fb3aac66aafe26c4"
//     },
//     "picture": "http://placehold.it/150x150",
//     "name": "Gushkool",
//     "email": "leilaware@gushkool.com",
//     "city": "Rabat",
//     "location": {
//         "type": "Point",
//         "coordinates": [
//             -6.81134,
//             33.95564
//         ]
//     }
// }
