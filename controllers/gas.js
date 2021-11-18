var gas = require('../models/gas');

// List of all gas 
exports.gas_list = async function (req, res) {
    try {
        thegas = await gas.find();
        res.send(thegas);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.gas_view_all_Page = async function (req, res) {
    try {
        thegas = await gas.find();
        res.render('gas', { title: 'gas Search Results', results: thegas });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific gas. 
exports.gas_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await gas.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle gas create on POST. 
exports.gas_create_post = async function (req, res) {
    console.log(req.body)
    let document = new gas();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"gas_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name;
    document.smell = req.body.smell;
    document.weight = req.body.weight;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle gas delete form on DELETE.
exports.gas_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await gas.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle gas update form on PUT. 
exports.gas_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await gas.findById(req.params.id)
        // Do updates of properties 
        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.smell) toUpdate.smell = req.body.smell;
        if (req.body.weight) toUpdate.weight = req.body.weight;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};

// Handle a show one view with id specified by query 
exports.gas_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await gas.findById(req.query.id)
        res.render('gasdetail',
            { title: 'gas Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a gas. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.gas_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('gascreate', { title: 'gas Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a gas. 
// query provides the id 
exports.gas_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await gas.findById(req.query.id)
        res.render('gasupdate', { title: 'gas Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.gas_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await gas.findById(req.query.id)
        res.render('gasdelete', {
            title: 'gas Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};