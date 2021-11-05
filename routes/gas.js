var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gas', { title: 'Search Results gas' });
});

module.exports = router;
