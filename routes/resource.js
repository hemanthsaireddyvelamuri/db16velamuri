var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var gas_controller = require('../controllers/gas');
const gas_controlers= require('../controllers/gas'); 

router.get('/', gas_controlers.gas_view_all_Page );
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a gas.  
router.post('/gas', gas_controller.gas_create_post); 
 
// DELETE request to delete gas. 
router.delete('/gas/:id', gas_controller.gas_delete); 
 
// PUT request to update gas. 
router.put('/gas/:id', 
gas_controller.gas_update_put); 
 
// GET request for one gas. 
router.get('/gas/:id', gas_controller.gas_detail); 
 
// GET request for list of all gas items. 
router.get('/gas', gas_controller.gas_list); 
 
module.exports = router;