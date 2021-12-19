var express = require('express');
var router = express.Router();
const customerController = require('../controller/customerController')

/* GET users listing. */
router.get('/', customerController.getAll);
router.get('/type/:type', customerController.getAllByType);
router.get('/byQueue', customerController.getByQueue);
router.get('/id/:id', customerController.getById);
router.post('/', customerController.insert);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete);

module.exports = router;
