var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var biscuit_controller = require('../controllers/biscuit'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// biscuit ROUTES /// 
 
// POST request for creating a biscuit.  
router.post('/biscuits', biscuit_controller.biscuit_create_post); 
 
// DELETE request to delete biscuit. 
router.delete('/biscuits/:id', biscuit_controller.biscuit_delete); 
 
// PUT request to update biscuit. 
router.put('/biscuits/:id', biscuit_controller.biscuit_update_put); 
 
// GET request for one biscuit. 
router.get('/biscuits/:id', biscuit_controller.biscuit_detail); 
 
// GET request for list of all biscuit items. 
router.get('/biscuits', biscuit_controller.biscuit_list); 
 
module.exports = router; 