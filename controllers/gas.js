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

// VIEWS 
// Handle a show all view 
exports.gas_view_all_Page = async function(req, res) { 
    try{ 
        thegas = await gas.find(); 
        res.render('gas', { title: 'gas Search Results', results: thegas }); 
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
exports.gas_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new gas(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.smell = req.body.smell; 
    document.weight = req.body.weight; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// Handle gas delete form on DELETE. 
exports.gas_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: gas delete DELETE ' + req.params.id); 
}; 
 
// Handle gas update form on PUT. 
exports.gas_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: gas update PUT' + req.params.id); 
};