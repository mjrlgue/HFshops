import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import keys from '../config/keys';
const Models = require('../helpers/user');


let router = express.Router();

router.post('/', (req, res) => {
  const { identifier, password } = req.body;
  console.log('email '+identifier);

   return Models.user.find(
   {email: identifier}).then(user => {
     //console.log('i am here '+user[0]._id);

     if (user[0].email === identifier) {

       if (bcrypt.compareSync(password, user[0].password)) {
         const token = jwt.sign({
          id: user[0]._id,
          email: user[0].email
          }, keys.jwtSecret);
          res.json({ token });
       } else {
         res.status(401).json({ errors: { form: 'Invalid credentials' } });
       }
     } else {
       res.status(401).json({ errors: { form: 'Invalid credentials' } });
     }
   }).catch(err =>{
     console.log(err);
     res.status(500).json({ errors: { form: 'Invalid credentials or an error occured.' } });
   });
});


export default router;
