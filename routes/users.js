const express = require('express');
const router = express.Router();
const data = require('../db.json').users;

router.get('/', (req, res) => {
  res.send(data);
});

router.post('/', (req, res) => {
  data.push(req.body);
  res.send(data);
});
/* post data for body
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@example.com",
    "password": "mysecretpassword",
    "age": 42,
    "address": {},
    "createdAt": "2023-11-06T08:12:34.567Z",
    "tags": []
  }
*/


router.get('/:email', (req, res) => {
  res.send(data.filter(user => user.email === req.params.email))
});

router.patch('/:email', (req, res) => {
  const userAddress = data.find(u => u.email === req.params.email).address;
  const reqAddress = req.body;

  for(const prop in reqAddress) {
    if (reqAddress[prop] !== userAddress[prop]) {
      userAddress[prop] = reqAddress[prop];
    }
  }

  res.send(data);
});
/* patch data for body
address: {
  "street": "123 Main St",
  "city": "Downtown",
  "state": "LA",
  "zip": "38472",
  "country": "USA"
}
*/

router.delete('/:email', (req, res) => {
  const indexForDelete = data.findIndex(user => user.email === req.params.email);
  console.log(indexForDelete)
  if(indexForDelete !== -1) {
    data.splice(indexForDelete, 1);
    res.send(`User with email ${req.params.email} is deleted`);
  }
  
  res.send(`The user with email ${req.params.email} isn't found`);
});

module.exports = router;