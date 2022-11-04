var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Biscuits', { title: 'Biscuits Search Results' });
});

module.exports = router;
