import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

import users from './routes/users';
import auth from './routes/auth';

import keys from './config/keys';

const app = express();

const dbUrl = keys.mongoURI;


app.use(bodyParser.json());

app.use('/api/auth', auth);
app.use('/api/add/users', users);

mongodb.MongoClient.connect(dbUrl, function(err, db){

  app.get('/api/shops', (req, res) => {
    db.collection('shops').find({}).toArray((err, shops) => {
      res.json({ shops });
      //console.log({ shops });
    })
  });
  app.listen(8080, () => console.log('Server running on localhost:8080...'));

});
