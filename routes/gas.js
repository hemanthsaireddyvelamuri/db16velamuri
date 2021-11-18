var express = require('express');
var router = express.Router();

const gas_controlers= require('../controllers/gas');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gas', { title: 'Search Results gas' });
});

/* GET detail gas page */ 
router.get('/detail', gas_controlers.gas_view_one_Page); 

module.exports = router;
