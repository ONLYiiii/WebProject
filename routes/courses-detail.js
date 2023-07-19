const express = require('express')
const router = express.Router()

const coursesController = require('../controllers/courses')

router.get('/cs:id', coursesController.getCoursesDetail)


module.exports = router