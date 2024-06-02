const router = require('express').Router()
const apicontroller = require('../controller/apicontroller')

router.get('/api/', apicontroller.rou)
router.get('/api/h', apicontroller.heloroute)

module.exports = router
