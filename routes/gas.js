var express = require('express');
var router = express.Router();

const gas_controlers = require('../controllers/gas');


// /* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('gas', { title: 'Search Results gas' });
// });

/* GET detail gas page */
router.get('/detail', gas_controlers.gas_view_one_Page);

router.get('/', gas_controlers.gas_view_all_Page);

/* GET create gas page */
router.get('/create',secured, gas_controlers.gas_create_Page);

/* GET update gas page */ 
router.get('/update',secured, gas_controlers.gas_update_Page);

/* GET create gas page */ 
router.get('/delete',secured, gas_controlers.gas_delete_Page);  

module.exports = router;
