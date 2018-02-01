# HFshops
A simple app using react redux for HF coding challenge.

# Installation

`$ npm install` and then `$ npm run dev`.


# Configuration
In `./backend/config` folder, create a new file `dev.js` and set it up, exemple:

```javascript
//dev.js - developpment env don't commit
module.exports = {
  mongoURI: 'mongodb://<user>:<password>@ds11122.mlab.com:12345/your-db',
  jwtSecret: 'abc123def456' //make sure you don't put special characters
};
```
and then to import keys from above:
```javascript
const keys = require('../config/keys');
```
For production, modify `./backend/config/prod.js` file with your proper variables.
# Why you should fork this
Well, you can add some awesome features using react component:
1. Add pagination for listing shops, using [react-paginate](https://github.com/AdeleD/react-paginate) or `react-bootstrap`
2. Connect components with redux store
3. Add high order component for more protection in client side
4. finally because you :heartpulse: code :smile:

