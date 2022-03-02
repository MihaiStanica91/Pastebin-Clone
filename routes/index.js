var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');


/* GET home page. */
router.get('/', controller.getAllPastes);
router.post('/', controller.addPaste);
router.get('/:id', controller.getPasteById);
router.post('/:id', controller.updatePaste);
router.get('/:id/:name', controller.getPasteByName);
router.post('/:id/:name', controller.deletePaste);

module.exports = router;