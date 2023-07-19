const express = require('express')
const router = express.Router()

const facultyController = require('../controllers/admin')

router.get('/staff', facultyController.getFaulty)

module.exports = router