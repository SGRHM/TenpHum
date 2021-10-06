const monitoramentoController = require('../controller/monitoramentoController')
const express = require('express');
const router = express.Router();

router.post('/register', monitoramentoController.Store)
router.get('/historicoList',  monitoramentoController.Index)


module.exports = router