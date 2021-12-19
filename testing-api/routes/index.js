var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("To use the APIs, add /customers to the url");
});

module.exports = router;
