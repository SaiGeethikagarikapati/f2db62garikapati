var Biscuit = require('../models/biscuit'); 
 
// List of all Costumes 
exports.biscuit_list = async function(req, res) { 
    try{ 
        theBiscuits = await Biscuit.find(); 
        res.send(theBiscuits); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific biscuit. 
exports.biscuit_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: biscuit detail: ' + req.params.id); 
}; 


exports.biscuit_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Biscuit(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.brandName = req.body.brandName; 
    document.price = req.body.price; 
    document.flavour = req.body.flavour; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// Handle biscuit delete form on DELETE. 
exports.biscuit_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: biscuit delete DELETE ' + req.params.id); 
}; 
 
// Handle biscuit update form on PUT. 
exports.biscuit_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: biscuit update PUT' + req.params.id); 
}; 

exports.biscuit_view_all_Page = async function(req, res) { 
    try{ 
        theBiscuits = await Biscuit.find(); 
        res.render('biscuits', { title: 'Biscuit Search Results', results: theBiscuits }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 