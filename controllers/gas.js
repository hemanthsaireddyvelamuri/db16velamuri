var gas = require('../models/gas'); 
 
// List of all gas 
exports.gas_list = async function(req, res) { 
    try{ 
        thegas = await gas.find(); 
        res.send(thegas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific gas. 
exports.gas_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: gas detail: ' + req.params.id); 
}; 
 
// Handle gas create on POST. 
exports.gas_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: gas create POST'); 
}; 
 
// Handle gas delete form on DELETE. 
exports.gas_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: gas delete DELETE ' + req.params.id); 
}; 
 
// Handle gas update form on PUT. 
exports.gas_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: gas update PUT' + req.params.id); 
};