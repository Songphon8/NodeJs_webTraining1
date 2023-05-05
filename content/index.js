const express = require('express');
const router = express.Router();

const {listAction, formView, removeAction, saveAction} = require('./controller.js');

router.get('/',listAction);
router.get('/views/form',formView);
router.get('/views/delete/:id', removeAction);
router.post('/views/save', saveAction);

module.exports = router;