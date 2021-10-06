const sensorController = require('../controllers/sensorController')
const express = require('express');
const router = express.Router();



router.post('/sensor/register', sensorController.Store)
router.get('/sensor/list', sensorController.Index)
router.get('/sensor/:id', sensorController.IndexOne)
router.put('/sensor/update/:id', sensorController.UpdateOne)
router.delete('/sensor/delete/:id', sensorController.DeleteOne)


module.exports = router;