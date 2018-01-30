import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();

const dbUrl = 'mongodb://admin:admin@ds159254.mlab.com:59254/email-dev';



app.use(bodyParser.json());
mongodb.MongoClient.connect(dbUrl, function(err, db){

  app.get('/api/shops', (req, res) => {
    db.collection('shops').find({}).toArray((err, shops) => {
      res.json({ shops });
      //console.log({ shops });
    })
  });
  app.listen(8080, () => console.log('Server running on localhost:8080...'));

});
