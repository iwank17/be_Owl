var express = require('express');
var router = express.Router();

/* GET home page. */

const data = [
  {
    name: 'Iwank Febrian',
    age: 26,
  },
  {
    name: 'Nanda Rizky Maulana Sodichin Remis Putra Tafonao',
    age: 100,
  },
  {
    name: 'Rolius Putra Zai ',
    age: 24,
  }
]

router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;
