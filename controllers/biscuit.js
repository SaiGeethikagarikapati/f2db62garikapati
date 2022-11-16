var Biscuit = require('../models/biscuit'); 
 
// List of all biscuits 
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
exports.biscuit_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Biscuit.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 


exports.biscuit_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Biscuit(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"biscuit_type":"goat", "cost":12, "size":"large"} 
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
exports.biscuit_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Biscuit.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle biscuit update form on PUT. 
exports.biscuit_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Biscuit.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.biscuit_type)  
               toUpdate.biscuit_type = req.body.biscuit_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

exports.biscuit_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Biscuit.findById( req.query.id) 
        res.render('biscuitdetail',  
{ title: 'Biscuit Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.biscuit_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('biscuitcreate', { title: 'Biscuit Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.biscuit_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Biscuit.findById(req.query.id) 
        res.render('biscuitupdate', { title: 'Biscuit Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
exports.biscuit_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Biscuit.findById(req.query.id) 
        res.render('biscuitdelete', { title: 'Biscuit Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 