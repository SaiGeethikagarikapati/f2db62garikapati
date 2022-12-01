var express = require('express'); 
const biscuit_controlers= require('../controllers/biscuit'); 
var router = express.Router(); 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET costumes */ 
router.get('/', biscuit_controlers.biscuit_view_all_Page ); 
router.get('/detail', biscuit_controlers.biscuit_view_one_Page); 
router.get('/create',secured,biscuit_controlers.biscuit_create_Page); 
router.get('/update',secured, biscuit_controlers.biscuit_update_Page); 
router.get('/delete',secured, biscuit_controlers.biscuit_delete_Page); 
module.exports = router; 